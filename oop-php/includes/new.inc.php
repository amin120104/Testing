<?php

class Books {

    var $price;
    var $title;

    function __construct($value) {
        $this->price = $value;
    }

    //pirce set    
    function setPrice($value) {
        $this->price = $value;
    }

    //price print
    function getPrice() {
        echo "price:" . $this -> price . "<br />";
    }

    //Title set
    function setTitle($value) {
        $this->title = $value;
    }

    //Title print
    function getTitle(){
        echo "Title:" . $this->title . "<br />";
    }
}

class Publiser extends Books {
    var $publisername;

    //set publisername
    function setPublisername($value) {
        $this->publisername = $value;
    }

    //get Publisername
    function getPublisername() {
        echo "Publisername:" . $this->publisername . "<br /><br />";
    }
}
