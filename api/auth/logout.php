<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/session.php';

session_destroy();
echo json_encode(['success' => true, 'message' => 'Sesión cerrada correctamente']);
?>