<?php
    ini_set('display_errors', 1);
    error_reporting(~0);
class Dbconnect {

    private $servername;
    private $username;
    private $password;
    private $dbname;
    // private $charset;

    public function connect() {
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "root";
        $this->dbname = "pdo_test";
        // $this->charset = "utf8mb4";

        try {
            $dsn = "mysql:host=".$this->servername.";dbname=".$this->dbname;  //you can extra add charset
            $pdo = new PDO($dsn, $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Database connected";
            return $pdo;
        } catch (PDOException $e) {
            echo "Connection failed: ".$e->getMessage();
        }

    }

}
