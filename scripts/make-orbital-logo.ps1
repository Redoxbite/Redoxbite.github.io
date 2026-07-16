Add-Type -AssemblyName System.Drawing

function Draw-Dot {
  param($Graphics, $Brush, [float]$X, [float]$Y, [float]$Size)
  $Graphics.FillEllipse($Brush, $X - ($Size / 2), $Y - ($Size / 2), $Size, $Size)
}

$size = 512
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))

$scale = 512.0 / 400.0
$g.ScaleTransform($scale, $scale)

$red = [System.Drawing.Color]::FromArgb(255, 255, 26, 61)
$white = [System.Drawing.Color]::FromArgb(255, 245, 245, 247)
$brushRed = New-Object System.Drawing.SolidBrush $red
$brushWhite = New-Object System.Drawing.SolidBrush $white

$pen = New-Object System.Drawing.Pen $red, 3.2
$pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

# Top-right orbit arc + dot (matches reference sheet)
$pathTop = New-Object System.Drawing.Drawing2D.GraphicsPath
$pathTop.AddBezier(318, 52, 372, 72, 388, 138, 348, 208)
$g.DrawPath($pen, $pathTop)
Draw-Dot $g $brushRed 318 52 15

# Bottom-left orbit arc + dot
$pathBottom = New-Object System.Drawing.Drawing2D.GraphicsPath
$pathBottom.AddBezier(82, 348, 28, 328, 12, 262, 52, 192)
$g.DrawPath($pen, $pathBottom)
Draw-Dot $g $brushRed 82 348 15

# Segmented rings
$penRing = New-Object System.Drawing.Pen $red, 3.2
$penRing.DashPattern = @(16, 12)
$g.DrawEllipse($penRing, 82, 82, 236, 236)

$penRing2 = New-Object System.Drawing.Pen $red, 2.4
$penRing2.DashPattern = @(11, 9)
$g.DrawEllipse($penRing2, 98, 98, 204, 204)

$fontRedox = New-Object System.Drawing.Font('Arial', 38, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontBite = New-Object System.Drawing.Font('Arial', 38, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontTag = New-Object System.Drawing.Font('Arial', 11, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

$g.DrawString('REDOX', $fontRedox, $brushRed, (New-Object System.Drawing.RectangleF 0, 168, 400, 44), $sf)
$g.DrawString('BITE', $fontBite, $brushWhite, (New-Object System.Drawing.RectangleF 0, 208, 400, 44), $sf)
$g.DrawString('by ZEOZOE', $fontTag, $brushWhite, (New-Object System.Drawing.RectangleF 0, 244, 400, 24), $sf)

$out = Join-Path $PSScriptRoot '..\assets\logo-orbital-match.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved $out"
