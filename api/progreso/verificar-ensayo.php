<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

$curso = htmlspecialchars($_GET['curso'] ?? '');

if (!$curso) {
    http_response_code(400);
    echo json_encode(['error' => 'Falta el curso']);
    exit;
}

// ─── Requisitos mínimos para acceder a ensayos ──────────────
$requisitos = [
    'material'   => 80,  // 80% de material completado
    'miniensayo' => 80   // 80% de miniensayos completados
];

// ─── Totales por curso ──────────────────────────────────────
$totales = [
    'M1'  => [ 'material' => 40, 'miniensayo' => 20 ],
    'CL'  => [ 'material' => 40, 'miniensayo' => 20 ],
    'M2'  => [ 'material' => 40, 'miniensayo' => 20 ],
    'HCS' => [ 'material' => 40, 'miniensayo' => 20 ],
    'CN'  => [ 'material' => 40, 'miniensayo' => 20 ]
];

if (!isset($totales[$curso])) {
    http_response_code(400);
    echo json_encode(['error' => 'Curso no válido']);
    exit;
}

$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("
    SELECT tipo, COUNT(*) as completados
    FROM progreso
    WHERE usuario_id = ? AND curso = ?
    GROUP BY tipo
");
$stmt->execute([$_SESSION['user_id'], $curso]);
$rows = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

// Calcular porcentajes
$pctMaterial   = isset($rows['material'])
    ? min(100, round(($rows['material']   / $totales[$curso]['material'])   * 100))
    : 0;
$pctMiniensayo = isset($rows['miniensayo'])
    ? min(100, round(($rows['miniensayo'] / $totales[$curso]['miniensayo']) * 100))
    : 0;

$tieneAcceso = $pctMaterial   >= $requisitos['material'] &&
               $pctMiniensayo >= $requisitos['miniensayo'];

echo json_encode([
    'acceso'          => $tieneAcceso,
    'pct_material'    => $pctMaterial,
    'pct_miniensayo'  => $pctMiniensayo,
    'req_material'    => $requisitos['material'],
    'req_miniensayo'  => $requisitos['miniensayo']
]);
?>