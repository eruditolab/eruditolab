<?php
require_once '../config/cors.php';
require_once '../config/session.php';

$method = $_SERVER['REQUEST_METHOD'];
$uri    = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$parts  = explode('/', trim($uri, '/'));

// Eliminar elementos vacíos
$parts = array_values(array_filter($parts));

// Debug temporal - comentar después
// error_log("URI: $uri | Parts: " . implode(', ', $parts));

// Buscar índice de 'api' en la URL
$apiIndex = array_search('api', $parts);

if ($apiIndex === false) {
    http_response_code(404);
    echo json_encode(['error' => 'Ruta no encontrada']);
    exit;
}

$resource = $parts[$apiIndex + 1] ?? '';  // auth, content, user
$action   = $parts[$apiIndex + 2] ?? '';  // login, register, courses...

// Limpiar extensión .php si viene en la URL
$action = str_replace('.php', '', $action);

switch ($resource) {
    case 'auth':
        $file = __DIR__ . "/auth/{$action}.php";
        if (file_exists($file)) {
            require_once $file;
        } else {
            http_response_code(404);
            echo json_encode(['error' => "Endpoint auth/{$action} no encontrado"]);
        }
        break;

    case 'content':
        requireAuth();
        $file = __DIR__ . "/content/{$action}.php";
        if (file_exists($file)) {
            require_once $file;
        } else {
            http_response_code(404);
            echo json_encode(['error' => "Endpoint content/{$action} no encontrado"]);
        }
        break;

    case 'user':
        requireAuth();
        $file = __DIR__ . "/user/{$action}.php";
        if (file_exists($file)) {
            require_once $file;
        } else {
            http_response_code(404);
            echo json_encode(['error' => "Endpoint user/{$action} no encontrado"]);
        }
        break;
        
    case 'progreso':
        requireAuth();
        $file = __DIR__ . "/progreso/{$action}.php";
        if (file_exists($file)) {
            require_once $file;
        } else {
            http_response_code(404);
            echo json_encode(['error' => "Endpoint progreso/{$action} no encontrado"]);
        }
        break;
    
    case 'ensayos':
        requireAuth();
        $file = __DIR__ . "/ensayos/{$action}.php";
        if (file_exists($file)) {
            require_once $file;
        } else {
            http_response_code(404);
            echo json_encode(['error' => "Endpoint ensayos/{$action} no encontrado"]);
        }
        break;
    case 'accesos':
        requireAuth();
        $file = __DIR__ . "/accesos/{$action}.php";
        if (file_exists($file)) 
            require_once $file;
        else { http_response_code(404); echo json_encode(['error' => 'No encontrado']); }
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Ruta no encontrada']);
        break;
}
?>