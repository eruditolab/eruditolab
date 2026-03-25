<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

$db     = Database::getInstance()->getConnection();
$cursos = ['CL', 'M1', 'M2', 'HCS', 'CN'];

$stmt = $db->prepare("
    SELECT curso, activo FROM accesos_cursos WHERE usuario_id = ?
");
$stmt->execute([$_SESSION['user_id']]);
$restricciones = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

// Si no hay restricción → acceso completo
$accesos = [];
foreach ($cursos as $curso) {
    $accesos[$curso] = isset($restricciones[$curso])
        ? (bool)$restricciones[$curso]
        : true;
}

echo json_encode($accesos);
?>