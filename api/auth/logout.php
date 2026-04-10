<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/session.php';
require_once $base . '/config/db.php';

// Eliminar token de la BD
if (isAuthenticated()) {
    $db   = Database::getInstance()->getConnection();
    $stmt = $db->prepare("UPDATE usuarios SET token = NULL, token_expiry = NULL WHERE id = ?");
    $stmt->execute([$_SESSION['user_id']]);
}

// Eliminar cookie
setcookie('auth_token', '', [
    'expires'  => time() - 3600,
    'path'     => '/',
    'httponly' => true,
    'samesite' => 'Strict'
]);

// Destruir sesión PHP
session_destroy();

echo json_encode(['success' => true]);