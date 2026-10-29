# Kala Guru - Native Windows Localhost Server (Zero-install)
param(
    [int]$Port = 8000,
    [string]$Root = ""
)

$ErrorActionPreference = "Continue"

# Resolve absolute root directory
if ([string]::IsNullOrWhiteSpace($Root)) {
    if (![string]::IsNullOrWhiteSpace($PSScriptRoot)) {
        $Root = $PSScriptRoot
    } else {
        $Root = (Get-Location).Path
    }
}
$Root = [System.IO.Path]::GetFullPath($Root)

# Supported MIME Types
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".webp" = "image/webp"
    ".ico"  = "image/x-icon"
    ".ttf"  = "font/ttf"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
}

# Function to run HttpListener
function Start-HttpListenerServer {
    param([int]$targetPort)
    try {
        $hl = New-Object System.Net.HttpListener
        $prefix = "http://localhost:$targetPort/"
        $hl.Prefixes.Add($prefix)
        $hl.Start()
        return $hl
    } catch {
        return $null
    }
}

# Try HttpListener first on port 8000, 8080, 3000
$portsToTry = @($Port, 8080, 3000, 5000, 8888)
$listener = $null
$activePort = $Port

foreach ($p in $portsToTry) {
    $listener = Start-HttpListenerServer -targetPort $p
    if ($listener -ne $null) {
        $activePort = $p
        break
    }
}

# Helper to start browser safely
function Open-Browser {
    param([string]$targetUrl)
    try {
        Start-Process $targetUrl
    } catch {
        Write-Host "Please open your browser and navigate to: $targetUrl" -ForegroundColor Cyan
    }
}

$url = "http://localhost:$activePort/"

Write-Host ""
Write-Host "================================================================" -ForegroundColor DarkYellow
Write-Host "  🎨 KALA GURU - LOCAL HOST SERVER IS ACTIVE" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor DarkYellow
Write-Host "  📍 Local URL:   $url" -ForegroundColor Green
Write-Host "  📂 Art Studio:  $Root" -ForegroundColor Cyan
Write-Host "  📷 Web Camera:  Hardware-accelerated on localhost" -ForegroundColor Gray
Write-Host "  🛑 To Stop:     Press Ctrl + C in this terminal window" -ForegroundColor DarkGray
Write-Host "================================================================" -ForegroundColor DarkYellow
Write-Host ""

Open-Browser -targetUrl $url

# IF HttpListener succeeded, use it (Fastest, standard Windows HTTP)
if ($listener -ne $null) {
    try {
        while ($listener.IsListening) {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $reqPath = $request.Url.LocalPath
            if ($reqPath -eq "/" -or [string]::IsNullOrWhiteSpace($reqPath)) {
                $reqPath = "/index.html"
            }

            $cleanPath = $reqPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $cleanPath))

            # Security: ensure file stays within Root folder
            if (!$filePath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
                $response.StatusCode = 403
                $response.Close()
                continue
            }

            if ([System.IO.File]::Exists($filePath)) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = "application/octet-stream"
                if ($mimeTypes.ContainsKey($ext)) {
                    $mime = $mimeTypes[$ext]
                }

                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $mime
                $response.ContentLength64 = $content.Length
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.StatusCode = 200
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $reqPath")
                $response.StatusCode = 404
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $msg.Length
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
            $response.Close()
        }
    } finally {
        $listener.Stop()
    }
} else {
    # Fallback to TcpListener (Works even if http.sys service is restricted)
    $tcp = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $activePort)
    $tcp.Start()

    try {
        while ($true) {
            $client = $tcp.AcceptTcpClient()
            $stream = $client.GetStream()
            $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII)
            $requestLine = $reader.ReadLine()

            if ([string]::IsNullOrWhiteSpace($requestLine)) {
                $client.Close()
                continue
            }

            $parts = $requestLine.Split(' ')
            if ($parts.Length -lt 2) {
                $client.Close()
                continue
            }

            $rawPath = $parts[1]
            if ($rawPath.Contains("?")) { $rawPath = $rawPath.Substring(0, $rawPath.IndexOf("?")) }
            if ($rawPath.Contains("#")) { $rawPath = $rawPath.Substring(0, $rawPath.IndexOf("#")) }
            $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
            if ($decodedPath -eq "/" -or [string]::IsNullOrWhiteSpace($decodedPath)) {
                $decodedPath = "/index.html"
            }

            $cleanPath = $decodedPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $cleanPath))

            if (!$filePath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
                $hdr = "HTTP/1.1 403 Forbidden`r`nContent-Length: 0`r`nConnection: close`r`n`r`n"
                $hB = [System.Text.Encoding]::ASCII.GetBytes($hdr)
                $stream.Write($hB, 0, $hB.Length)
                $client.Close()
                continue
            }

            if ([System.IO.File]::Exists($filePath)) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = "application/octet-stream"
                if ($mimeTypes.ContainsKey($ext)) { $mime = $mimeTypes[$ext] }

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $hdr = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                $hB = [System.Text.Encoding]::ASCII.GetBytes($hdr)
                $stream.Write($hB, 0, $hB.Length)
                $stream.Write($bytes, 0, $bytes.Length)
                $stream.Flush()
            } else {
                $msg = "404 Not Found: $decodedPath"
                $mB = [System.Text.Encoding]::UTF8.GetBytes($msg)
                $hdr = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($mB.Length)`r`nConnection: close`r`n`r`n"
                $hB = [System.Text.Encoding]::ASCII.GetBytes($hdr)
                $stream.Write($hB, 0, $hB.Length)
                $stream.Write($mB, 0, $mB.Length)
                $stream.Flush()
            }
            $client.Close()
        }
    } finally {
        $tcp.Stop()
    }
}
