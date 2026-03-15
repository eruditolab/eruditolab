<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$data   = json_decode(file_get_contents("php://input"), true);
$nombre = htmlspecialchars(trim($data['nombre'] ?? ''));
$email  = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$pass   = $data['password'] ?? '';

if (!$nombre || !$email || !$pass) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos los campos son requeridos']);
    exit;
}

if (strlen($pass) < 8) {
    http_response_code(400);
    echo json_encode(['error' => 'La contraseña debe tener al menos 8 caracteres']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("SELECT id FROM usuarios WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'El email ya está registrado']);
    exit;
}

$hash = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 12]);
$ins  = $db->prepare("INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, 'estudiante')");
$ins->execute([$nombre, $email, $hash]);

http_response_code(201);
echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
?>