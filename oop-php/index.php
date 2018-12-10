<?php

ini_set('display_errors', 1);
error_reporting(~0);

include('includes/new.inc.php');

$physic_9_10 = new Books(100, 'Habluder Programming');
$chemistry_9_10 = new Books(50, 'not habluder programming');

//set book information
// $physic_9_10->setPrice(100);
// $physic_9_10->setTitle('Habluder Programming');
// $physic_9_10->setPublisername('panjary publication');

// $chemistry_9_10->setPrice(100);
// $chemistry_9_10->setTitle('Habluder Programming');
// $chemistry_9_10->setPublisername('joikoli publication');

//get book information
$physic_9_10->getPrice();
$physic_9_10->getTitle();
// $physic_9_10->getPublisername();

$chemistry_9_10->getPrice();
$chemistry_9_10->getTitle();
// $chemistry_9_10->getPublisername();

class Extraext extends Extra {
    public function name() {
        return $this->name;
    }
}

$object = new Extraext();
// unset($object);
echo $object->name();

echo Statictest::$mynumber . "<br />";
echo Statictest::staticFnc();

$txtobj = new Statictest();

echo $txtobj->newTxt();
echo $txtobj->staticFnc();
