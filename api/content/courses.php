<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

$method = $_SERVER['REQUEST_METHOD'];
$db     = Database::getInstance()->getConnection();

switch ($method) {
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $db->prepare("SELECT * FROM cursos WHERE id = ?");
            $stmt->execute([$id]);
            $curso = $stmt->fetch();
            echo json_encode($curso ?: ['error' => 'Curso no encontrado']);
        } else {
            $stmt = $db->query("SELECT id, nombre, descripcion, categoria, imagen FROM cursos ORDER BY categoria");
            echo json_encode($stmt->fetchAll());
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
}
?>