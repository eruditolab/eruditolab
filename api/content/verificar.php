<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/session.php';
require_once $base . '/config/db.php';

// ─── Verificar autenticación por sesión o cookie ────────────
function obtenerUsuarioId($base) {
    // Método 1: Sesión PHP activa — verificar que token sigue vigente en BD
    if (isAuthenticated()) {
        $db   = Database::getInstance()->getConnection();
        $stmt = $db->prepare("
            SELECT id FROM usuarios
            WHERE id = ?
            AND token_expiry > NOW()
            AND estado = 'activo'
        ");
        $stmt->execute([$_SESSION['user_id']]);
        $user = $stmt->fetch();
        if ($user) return $user['id'];

        // Token expiró o fue reemplazado — cerrar sesión
        session_destroy();
        return null;
    }

    // Método 2: Cookie con token
    if (!empty($_COOKIE['auth_token'])) {
        $token = $_COOKIE['auth_token'];
        $db    = Database::getInstance()->getConnection();
        $stmt  = $db->prepare("
            SELECT id FROM usuarios
            WHERE token = ?
            AND estado = 'activo'
            AND token_expiry > NOW()
        ");
        $stmt->execute([$token]);
        $user = $stmt->fetch();
        if ($user) {
            $_SESSION['user_id'] = $user['id'];
            return $user['id'];
        }

        // Cookie inválida — eliminarla
        setcookie('auth_token', '', ['expires' => time() - 3600, 'path' => '/']);
    }

    return null;
}

$userId = obtenerUsuarioId($base);

if (!$userId) {
    $ext = strtolower(pathinfo($_GET['ruta'] ?? '', PATHINFO_EXTENSION));
    if (in_array($ext, ['css', 'js'])) {
        http_response_code(200);
        exit;
    }
    header('Location: /eruditolab/login.html');
    exit;
}

// ─── Verificar estado del usuario ───────────────────────────
$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("SELECT estado FROM usuarios WHERE id = ?");
$stmt->execute([$userId]);
$user = $stmt->fetch();

if (!$user || $user['estado'] !== 'activo') {
    header('Location: /eruditolab/login.html');
    exit;
}

// ─── Limpiar y validar ruta ──────────────────────────────────
$ruta = $_GET['ruta'] ?? '';
$ruta = str_replace(['../', '..\\', '..'], '', $ruta);
$ruta = ltrim($ruta, '/\\');

$extension = strtolower(pathinfo($ruta, PATHINFO_EXTENSION));

if ($extension === 'pdf') {
    $carpetaBase = $base . '/documentos';
} else {
    $carpetaBase = $base . '/content';
}

$archivo  = $carpetaBase . '/' . $ruta;
$realBase = realpath($carpetaBase);

if (!$realBase) {
    http_response_code(500);
    echo 'Error: carpeta base no encontrada';
    exit;
}

if (!file_exists($archivo)) {
    http_response_code(404);
    echo 'Archivo no encontrado: ' . htmlspecialchars($ruta);
    exit;
}

$realArchivo = realpath($archivo);

if (!$realArchivo || strpos($realArchivo, $realBase) !== 0) {
    http_response_code(403);
    echo 'Acceso denegado';
    exit;
}

// ─── Servir archivo ─────────────────────────────────────────
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