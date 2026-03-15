<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$data  = json_decode(file_get_contents("php://input"), true);
$curso = htmlspecialchars($data['curso'] ?? '');
$tipo  = htmlspecialchars($data['tipo']  ?? '');
$item  = htmlspecialchars($data['item']  ?? '');

if (!$curso || !$tipo || !$item) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos']);
    exit;
}

$db = Database::getInstance()->getConnection();

// INSERT IGNORE para no duplicar si ya existe
$stmt = $db->prepare("
    INSERT IGNORE INTO progreso (usuario_id, curso, tipo, item)
    VALUES (?, ?, ?, ?)
");
$stmt->execute([$_SESSION['user_id'], $curso, $tipo, $item]);

echo json_encode(['success' => true]);
?>