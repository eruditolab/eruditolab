<?php
$base = dirname(__DIR__, 2);
require_once $base . '/config/cors.php';
require_once $base . '/config/db.php';
require_once $base . '/config/session.php';

requireAuth();

// Totales posibles por curso y tipo
// Ajusta estos números según cuántos items tiene cada curso
$totales = [
    'M1' => [
        'material'   => 80,  // 20 materias + 20 ejercicios
        'miniensayo' => 20,  // cantidad de miniensayos
        'ensayo'     => 10    // cantidad de ensayos
    ],
    'CL' => [
        'material'   => 80,
        'miniensayo' => 20,
        'ensayo'     => 10
    ],
    'M2' => [
        'material'   => 80,
        'miniensayo' => 20,
        'ensayo'     => 10
    ],
    'HCS' => [
        'material'   => 80,
        'miniensayo' => 20,
        'ensayo'     => 10
    ],
    'CN' => [
        'material'   => 80,
        'miniensayo' => 20,
        'ensayo'     => 10
    ]
];

$db   = Database::getInstance()->getConnection();
$stmt = $db->prepare("
    SELECT curso, tipo, COUNT(*) as completados
    FROM progreso
    WHERE usuario_id = ?
    GROUP BY curso, tipo
");
$stmt->execute([$_SESSION['user_id']]);
$rows = $stmt->fetchAll();

// Calcular porcentaje por curso
$progreso = [];
foreach ($totales as $curso => $tipos) {
    $totalItems      = array_sum($tipos);
    $totalCompletados = 0;

    foreach ($rows as $row) {
        if ($row['curso'] === $curso) {
            $totalCompletados += $row['completados'];
        }
    }

    $porcentaje = $totalItems > 0
        ? min(100, round(($totalCompletados / $totalItems) * 100))
        : 0;

    $progreso[$curso] = $porcentaje;
}

echo json_encode($progreso);
?>