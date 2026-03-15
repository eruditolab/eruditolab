<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

$db       = Database::getInstance()->getConnection();
$curso_id = $_GET['curso_id'] ?? null;

if (!$curso_id) {
    http_response_code(400);
    echo json_encode(['error' => 'Se requiere curso_id']);
    exit;
}

$stmt = $db->prepare("
    SELECT m.id, m.nombre, m.descripcion, m.orden,
        COUNT(l.id) as total_lecciones
    FROM modulos m
    LEFT JOIN lecciones l ON l.modulo_id = m.id
    WHERE m.curso_id = ?
    GROUP BY m.id
    ORDER BY m.orden
");
$stmt->execute([$curso_id]);
echo json_encode($stmt->fetchAll());
?>