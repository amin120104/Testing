<?php
    include_once('inc/db-connection.php');
    include_once('inc/user.php');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PDO Connection</title>
</head>
<body>
    <?php 
        $object = new User;
        $getvalue = $object->getUsersWithCountCheck();
        var_dump($getvalue);
        foreach ($getvalue as $result) {
            echo "<br />" .$result['name'] . "<br/>";
        }
    ?>
</body>
</html>