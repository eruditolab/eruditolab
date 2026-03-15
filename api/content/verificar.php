<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/session.php';

if (!isAuthenticated()) {
    $ext = strtolower(pathinfo($_GET['ruta'] ?? '', PATHINFO_EXTENSION));
    if (in_array($ext, ['css', 'js'])) {
        http_response_code(200);
        exit;
    }
    header('Location: /eruditolab/public/login.html');
    exit;
}

require_once $base . '/config/db.php';
$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("SELECT estado FROM usuarios WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

if (!$user || $user['estado'] !== 'activo') {
    header('Location: /eruditolab/public/login.html');
    exit;
}

// ─── Obtener y limpiar la ruta ───────────────────────────
$ruta = $_GET['ruta'] ?? '';
$ruta = str_replace(['../', '..\\', '..'], '', $ruta);
$ruta = ltrim($ruta, '/\\');

$extension = strtolower(pathinfo($ruta, PATHINFO_EXTENSION));

// ─── PDFs van a carpeta documentos/ (fuera de content/) ─
if ($extension === 'pdf') {
    $carpetaBase = $base . '/documentos';
    $archivo     = $carpetaBase . '/' . $ruta;
    $realBase    = realpath($carpetaBase);
} else {
    $carpetaBase = $base . '/content';
    $archivo     = $carpetaBase . '/' . $ruta;
    $realBase    = realpath($carpetaBase);
}

// Verificar que la carpeta base existe
if (!$realBase) {
    http_response_code(500);
    echo 'Error: carpeta base no encontrada';
    exit;
}

// Verificar que el archivo existe
if (!file_exists($archivo)) {
    http_response_code(404);
    echo 'Archivo no encontrado: ' . htmlspecialchars($ruta);
    exit;
}

$realArchivo = realpath($archivo);

// Verificar que el archivo está dentro de la carpeta permitida
if (!$realArchivo || strpos($realArchivo, $realBase) !== 0) {
    http_response_code(403);
    echo 'Acceso denegado';
    exit;
}

// ─── Servir archivo ──────────────────────────────────────
$mimeTypes = [
    'html' => 'text/html; charset=utf-8',
    'css'  => 'text/css',
    'js'   => 'application/javascript',
    'pdf'  => 'application/pdf',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'gif'  => 'image/gif',
    'mp4'  => 'video/mp4',
    'webp' => 'image/webp',
    'svg'  => 'image/svg+xml'
];

$mime = $mimeTypes[$extension] ?? 'application/octet-stream';
header("Content-Type: $mime");

if ($extension === 'pdf') {
    header('Content-Disposition: inline; filename="' . basename($realArchivo) . '"');
    header('Content-Length: ' . filesize($realArchivo));
}

readfile($realArchivo);
?>