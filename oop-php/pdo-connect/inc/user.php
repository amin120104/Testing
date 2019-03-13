<?php

class User extends Dbconnect {

    public function getAllUsers() {
        $stmt = $this->connect()->query("SELECT * FROM users");
        while ($row = $stmt->fetch()) {
            $name = $row['name'];
            return $name;
        }
    }

    public function getUsersWithCountCheck() {
        // $id = 1;
        // $name = "uttom";

        $stmt = $this->connect()->prepare("SELECT * FROM users");//extra add  WHERE id=? AND name=?
        $stmt->execute();  //add on excute [$id, $name]
  
        if ($stmt->rowCount()) {
            while ($row = $stmt->fetchAll()) {
                return $row;
            }
        }
    }

}