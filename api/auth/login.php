<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$data  = json_decode(file_get_contents("php://input"), true);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$pass  = $data['password'] ?? '';

if (!$email || !$pass) {
    http_response_code(400);
    echo json_encode(['error' => 'Email y contraseña son requeridos']);
    exit;
}

$db   = Database::getInstance()->getConnection();

// ── estado incluido en el SELECT ─────────────────────────
$stmt = $db->prepare("SELECT id, nombre, email, password, rol, estado 
                      FROM usuarios WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($pass, $user['password'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Credenciales incorrectas']);
    exit;
}

// ── Verificar estado de la cuenta ────────────────────────
if ($user['estado'] === 'pendiente') {
    http_response_code(403);
    echo json_encode(['error' => 'Tu cuenta está pendiente de activación. Una vez confirmado tu pago, recibirás acceso.']);
    exit;
}

if ($user['estado'] === 'bloqueado') {
    http_response_code(403);
    echo json_encode(['error' => 'Tu cuenta ha sido bloqueada. Contacta al administrador.']);
    exit;
}

// ── Login exitoso ─────────────────────────────────────────
$_SESSION['user_id'] = $user['id'];
$_SESSION['rol']     = $user['rol'];
$token = generateToken($user['id']);

echo json_encode([
    'success' => true,
    'token'   => $token,
    'user'    => [
        'id'     => $user['id'],
        'nombre' => $user['nombre'],
        'email'  => $user['email'],
        'rol'    => $user['rol']
    ]
]);
?>