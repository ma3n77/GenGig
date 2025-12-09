Write-Host "Testing Gengig pages..." -ForegroundColor Green

$pages = @(
    @{Name="Home"; Url="http://localhost:3000"},
    @{Name="About"; Url="http://localhost:3000/about"},
    @{Name="Contact"; Url="http://localhost:3000/contact"},
    @{Name="Success Stories"; Url="http://localhost:3000/success-stories"}
)

foreach ($page in $pages) {
    try {
        $response = Invoke-WebRequest -Uri $page.Url -UseBasicParsing -TimeoutSec 5
        if ($response.StatusCode -eq 200) {
            Write-Host "✓ $($page.Name) page: OK (HTTP $($response.StatusCode))" -ForegroundColor Green
            
            # Check for key content
            $content = $response.Content
            if ($content -like "*Gengig*") {
                Write-Host "  - Contains Gengig branding ✓" -ForegroundColor Gray
            }
            if ($content -like "*navbar*" -or $content -like "*nav*") {
                Write-Host "  - Navigation present ✓" -ForegroundColor Gray
            }
        } else {
            Write-Host "⚠ $($page.Name) page: HTTP $($response.StatusCode)" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "✗ $($page.Name) page: Error - $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "Page testing complete!" -ForegroundColor Green
