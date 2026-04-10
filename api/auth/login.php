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
$stmt = $db->prepare("SELECT id, nombre, email, password, rol, estado 
                      FROM usuarios WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($pass, $user['password'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Credenciales incorrectas']);
    exit;
}

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

// ── Login exitoso ────────────────────────────────────────────
$_SESSION['user_id'] = $user['id'];
$_SESSION['rol']     = $user['rol'];

$token  = generateToken($user['id']);
$expiry = date('Y-m-d H:i:s', time() + 3600);

// Guardar token en BD
$stmt = $db->prepare("UPDATE usuarios SET token = ?, token_expiry = ? WHERE id = ?");
$stmt->execute([$token, $expiry, $user['id']]);

// Guardar token en cookie segura
setcookie('auth_token', $token, [
    'expires'  => time() + 3600,
    'path'     => '/',
    'secure'   => true,    // ← true en producción con HTTPS
    'httponly' => true,
    'samesite' => 'Lax'    // ← Lax en vez de Strict para mejor compatibilidad
]);

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