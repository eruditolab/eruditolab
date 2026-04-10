<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function isAuthenticated() {
    return isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
}

function requireAuth() {
    if (!isAuthenticated()) {
        http_response_code(401);
        echo json_encode(['error' => 'No autorizado. Inicia sesión.']);
        exit;
    }
}

function generateToken($user_id) {
    return base64_encode(json_encode([
        'user_id' => $user_id,
        'exp'     => time() + 3600,
        'rand'    => bin2hex(random_bytes(16))
    ]));
}