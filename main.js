let display = document.getElementById('display');
let currentInput= '';
let operator = '';
let previusInput= '';

//Agregar botones

function appendNumber(number){
currentInput += number;
display.value = currentInput;
}

function operate(op){
    if(currentInput === '') return;
    if(previusInput!== '')calculate();
    operator = op;
    previusInput =currentInput;
    currentInput = '';
}

function calculate(){
    if(currentInput==='' || previusInput==='') return;
    let result;
    switch (operator){
    case'+':
    result=parseFloat(previusInput) + parseFloat(currentInput);

    case'-':
    result=parseFloat(previusInput) - parseFloat(currentInput);

    case'*':
    result=parseFloat(previusInput) * parseFloat(currentInput);

    case'/':
    result=parseFloat(previusInput) / parseFloat(currentInput);
    break;
    default:
    return;
    }

    display.value = result;
    currentInput='';
    previusInput = result.toString();

    }   
    
    function clearDisplay(){
        display.value='';
        currentInput='';
        previusInput='';
        operator='';

    }
    
