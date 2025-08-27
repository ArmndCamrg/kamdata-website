# Script de configuración del entorno virtual para Kamdata Website
# Ejecutar con: .\setup-env.ps1

Write-Host "🚀 Configurando entorno virtual para Kamdata Website..." -ForegroundColor Green

# Verificar si Node.js está instalado
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Verificar versión de Node.js
$nodeVersion = node --version
Write-Host "📦 Versión actual de Node.js: $nodeVersion" -ForegroundColor Yellow

# Verificar si npm está disponible
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm no está disponible" -ForegroundColor Red
    exit 1
}

# Limpiar caché de npm
Write-Host "🧹 Limpiando caché de npm..." -ForegroundColor Blue
npm cache clean --force

# Eliminar node_modules si existe
if (Test-Path "node_modules") {
    Write-Host "🗑️ Eliminando node_modules existente..." -ForegroundColor Blue
    Remove-Item -Recurse -Force "node_modules"
}

# Eliminar package-lock.json si existe
if (Test-Path "package-lock.json") {
    Write-Host "🗑️ Eliminando package-lock.json existente..." -ForegroundColor Blue
    Remove-Item -Force "package-lock.json"
}

# Instalar dependencias
Write-Host "📥 Instalando dependencias..." -ForegroundColor Blue
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Entorno virtual configurado correctamente" -ForegroundColor Green
    Write-Host "" 
    Write-Host "🎯 Comandos disponibles:" -ForegroundColor Cyan
    Write-Host "  npm start    - Iniciar servidor de desarrollo" -ForegroundColor White
    Write-Host "  npm run build - Construir para producción" -ForegroundColor White
    Write-Host "  npm test     - Ejecutar pruebas" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Para iniciar el servidor: npm start" -ForegroundColor Green
} else {
    Write-Host "❌ Error al configurar el entorno virtual" -ForegroundColor Red
    exit 1
}