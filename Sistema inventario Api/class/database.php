class Database extends MySQLi {
     private static $instance = null ;

     private function __construct($host, $user, $password, $database){ 
         parent::__construct($host, $user, $password, $database);
     }

     public static function getInstance(){
         if (self::$instance == null){
             self::$instance = new self("localhost", "", "", "");
         }
         return self::$instance ;
     }
}

$db = Database::getInstance();
$result = $db->query("SELECT 1 FROM table");