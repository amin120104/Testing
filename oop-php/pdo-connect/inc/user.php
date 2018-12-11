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
        $id = 1;
        $name = "uttom";

        $stmt = $this->connect()->prepare("SELECT * FROM users WHERE id=? AND name=?");
        $stmt->execute([$id, $name]);

        if ($stmt->rowCount()) {
            while ($row = $stmt->fetch()) {
                return $row['name'];
            }
        }
    }

}