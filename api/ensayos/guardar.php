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

$data   = json_decode(file_get_contents("php://input"), true);
$curso  = htmlspecialchars($data['curso']  ?? '');
$ensayo = htmlspecialchars($data['ensayo'] ?? '');
$puntaje = intval($data['puntaje'] ?? 0);

if (!$curso || !$ensayo || !$puntaje) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos']);
    exit;
}

$db = Database::getInstance()->getConnection();

// Verificar si ya completó este ensayo
$stmt = $db->prepare("SELECT id, puntaje FROM ensayos_completados WHERE usuario_id = ? AND curso = ? AND ensayo = ?");
$stmt->execute([$_SESSION['user_id'], $curso, $ensayo]);
$existente = $stmt->fetch();

if ($existente) {
    echo json_encode([
        'success'    => false,
        'yaCompletado' => true,
        'puntaje'    => $existente['puntaje'],
        'mensaje'    => 'Ya completaste este ensayo anteriormente.'
    ]);
    exit;
}

// Guardar ensayo completado
$stmt = $db->prepare("INSERT INTO ensayos_completados (usuario_id, curso, ensayo, puntaje) VALUES (?, ?, ?, ?)");
$stmt->execute([$_SESSION['user_id'], $curso, $ensayo, $puntaje]);

// Mapeo curso → columna puntaje en usuarios
$columnas = [
    'CL'  => 'puntaje_cl',
    'M1'  => 'puntaje_m1',
    'M2'  => 'puntaje_m2',
    'HCS' => 'puntaje_hcs',
    'CN'  => 'puntaje_cn'
];

if (isset($columnas[$curso])) {
    $col = $columnas[$curso];

    // Solo actualizar si el nuevo puntaje es mayor al actual
    $stmt = $db->prepare("UPDATE usuarios SET {$col} = ? WHERE id = ? AND ({$col} IS NULL OR {$col} < ?)");
    $stmt->execute([$puntaje, $_SESSION['user_id'], $puntaje]);
}

echo json_encode([
    'success' => true,
    'puntaje' => $puntaje,
    'mensaje' => 'Puntaje guardado correctamente.'
]);