<?php
/*$host = "localhost";
$port = "3307";
$db = "login_app";
$user = "root";
$pass = "";



// Opciones de PDO
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        $options
);

    
    // Mensaje de éxito para debug (comentar en producción)
    // echo "Conexión exitosa a la base de datos";
    
} catch (PDOException $e) {
    // Mostrar error detallado
    die("
    <div style='font-family: Arial; padding: 20px; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 5px; color: #721c24;'>
        <h2>Error de Conexión a la Base de Datos</h2>
        <p><strong>Mensaje:</strong> " . $e->getMessage() . "</p>
        <p><strong>Código:</strong> " . $e->getCode() . "</p>
        <hr>
    </div>
    ");
}*/
class Database {
    private static $instance = null;
    private $conn;

    // ─── Configuración de conexión ───────────────────────────────
    private $host     = 'localhost';
    private $port     = '3307';          // Tu puerto personalizado
    private $db_name  = 'login_app';     // Tu nombre de BD actual
    private $username = 'root';
    private $password = '';

    private $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    private function __construct() {
        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset=utf8mb4",
                $this->username,
                $this->password,
                $this->options
            );
        } catch (PDOException $e) {
            http_response_code(500);
            // En producción nunca expongas el mensaje real
            $isDev = true; // Cambia a false en producción
            echo json_encode([
                'error'   => 'Error de conexión a la base de datos',
                'detalle' => $isDev ? $e->getMessage() : 'Contacta al administrador'
            ]);
            exit;
        }
    }

    public static function getInstance(): self {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection(): PDO {
        return $this->conn;
    }

    // Evitar clonación y deserialización del Singleton
    private function __clone() {}
    public function __wakeup() {
        throw new \Exception("No se puede deserializar un Singleton");
    }
}
?>