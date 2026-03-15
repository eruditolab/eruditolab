<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

$curso  = htmlspecialchars($_GET['curso']  ?? '');
$ensayo = htmlspecialchars($_GET['ensayo'] ?? '');

if (!$curso || !$ensayo) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos']);
    exit;
}

$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("SELECT puntaje, fecha FROM ensayos_completados WHERE usuario_id = ? AND curso = ? AND ensayo = ?");
$stmt->execute([$_SESSION['user_id'], $curso, $ensayo]);
$row  = $stmt->fetch();

echo json_encode([
    'completado' => $row ? true : false,
    'puntaje'    => $row ? $row['puntaje'] : null,
    'fecha'      => $row ? $row['fecha']   : null
]);