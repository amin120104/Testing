<?php
ini_set('display_errors', 1);
error_reporting(~0);

$number1 = $_POST['number1'];
$number2 = $_POST['number2'];
$caltype = $_POST['Select'];

include_once('calculation.php');

$finalvalue = new Calculation($number1, $number2, $caltype);

echo '<h1>'.$finalvalue->cal() . '</h1>';


