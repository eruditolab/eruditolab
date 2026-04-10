<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("
    SELECT id FROM usuarios
    WHERE id = ?
    AND token_expiry > NOW()
");
$stmt->execute([$_SESSION['user_id']]);
if (!$stmt->fetch()) {
    http_response_code(401);
    echo json_encode(['error' => 'Sesión expirada. Inicia sesión nuevamente.']);
    exit;
}

// ─── GET: Obtener perfil ────────────────────────────────────
if ($method === 'GET') {
    $stmt = $db->prepare("SELECT id, nombre, email, rol, nem, ranking,
                                 puntaje_cl, puntaje_m1, puntaje_hcs,
                                 puntaje_cn, puntaje_m2
                          FROM usuarios WHERE id = ?");
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(404);
        echo json_encode(['error' => 'Usuario no encontrado']);
        exit;
    }

    echo json_encode($user);
}

// ─── PUT: Actualizar campos editables ──────────────────────
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);

    $permitidos = ['nem', 'ranking', 'puntaje_cl', 'puntaje_m1',
                   'puntaje_hcs', 'puntaje_cn', 'puntaje_m2'];

    $campos  = [];
    $valores = [];

    foreach ($permitidos as $campo) {
        if (isset($data[$campo])) {
            $campos[]  = "$campo = ?";
            $valores[] = $data[$campo];
        }
    }

    if (empty($campos)) {
        http_response_code(400);
        echo json_encode(['error' => 'No hay campos válidos para actualizar']);
        exit;
    }

    $valores[] = $_SESSION['user_id'];
    $sql  = "UPDATE usuarios SET " . implode(', ', $campos) . " WHERE id = ?";
    $stmt = $db->prepare($sql);
    $stmt->execute($valores);

    echo json_encode(['success' => true, 'message' => 'Perfil actualizado']);
}

else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}