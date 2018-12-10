<?php

class Books {

    var $price;
    var $title;

    function __construct($value1, $value2) {
        $this->price = $value1;
        $this->title = $value2;
    }

    //pirce set    
    // function setPrice($value) {
    //     $this->price = $value;
    // }

    //price print
    function getPrice() {
        echo "price:" . $this -> price . "<br />";
    }

    //Title set
    // function setTitle($value) {
    //     $this->title = $value;
    // }

    //Title print
    function getTitle(){
        echo "Title:" . $this->title . "<br />";
    }
}

// class Publiser extends Books {
//     var $publisername;

//     //set publisername
//     function setPublisername($value) {
//         $this->publisername = $value;
//     }

//     //get Publisername
//     function getPublisername() {
//         echo "Publisername:" . $this->publisername . "<br /><br />";
//     }
// }


//extra class
class Extra {
    protected $name = "amin mithun " . __CLASS__ . __LINE__ . __DIR__;
    
}

class Statictest {

    public static $mynumber = 10;

    public $txt = "new txt";

    public static function staticFnc(){
        return self::$mynumber;
    }

    public function newTxt(){
        return $this->txt;
    }
}
