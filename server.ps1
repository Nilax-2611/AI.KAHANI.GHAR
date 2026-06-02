$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:3000/")
try {
    $listener.Start()
    Write-Host "Server started at http://127.0.0.1:3000/"
} catch {
    Write-Host "Error starting listener: $_"
    exit 1
}

$Cwd = "c:\Users\surya\OneDrive\Desktop\AI.KAHANI.GHAR"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/") { $rawPath = "/index.html" }
        
        $filePath = Join-Path $Cwd $rawPath.TrimStart('/')
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) { $response.ContentType = "image/jpeg" }
            elseif ($filePath.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($filePath.EndsWith(".gif")) { $response.ContentType = "image/gif" }
            elseif ($filePath.EndsWith(".webp")) { $response.ContentType = "image/webp" }
            elseif ($filePath.EndsWith(".svg")) { $response.ContentType = "image/svg+xml" }
            elseif ($filePath.EndsWith(".ico")) { $response.ContentType = "image/x-icon" }
            elseif ($filePath.EndsWith(".ogg") -or $filePath.EndsWith(".oga")) { $response.ContentType = "audio/ogg" }
            elseif ($filePath.EndsWith(".mp3")) { $response.ContentType = "audio/mpeg" }
            elseif ($filePath.EndsWith(".wav")) { $response.ContentType = "audio/wav" }
            
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File not found: $rawPath")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        # Suppress loop errors during browser reloads
    }
}
