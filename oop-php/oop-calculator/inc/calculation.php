<?php

class Calculation {

    public $number1;
    public $nubmer2;
    public $caltype;

    function __construct($first, $second, $third) {
        $this->number1 = $first;
        $this->number2 = $second;
        $this->caltype = $third;
    }

    function cal() {
        switch ($this->caltype) {
            case 'add':
                $result = $this->number1 + $this->number2;
                break;

            case 'sub':
                $result = $this->number1 - $this->number2;
                break;

            case 'mul':
                $result = $this->number1 * $this->number2;
                break;
            
            default:
                echo "please enter valid number";
                break;
        }
        return $result;
    }

}
