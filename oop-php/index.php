<?php

include('includes/new.inc.php');

$physic_9_10 = new Books(10);
$chemistry_9_10 = new Publiser();

//set book information
// $physic_9_10->setPrice(100);
$physic_9_10->setTitle('Habluder Programming');
// $physic_9_10->setPublisername('panjary publication');

$chemistry_9_10->setPrice(100);
$chemistry_9_10->setTitle('Habluder Programming');
$chemistry_9_10->setPublisername('panjary publication');

//get book information
$physic_9_10->getPrice();
$physic_9_10->getTitle();
// $physic_9_10->getPublisername();

$chemistry_9_10->getPrice();
$chemistry_9_10->getTitle();
$chemistry_9_10->getPublisername();