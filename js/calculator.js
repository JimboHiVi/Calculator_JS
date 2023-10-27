let addSymbol = (character) => {
    document.getElementById("screen").value += character;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}


let calculate = () => {    

    let operation = document.getElementById("screen").value;
    let pos = getPosSymbol(operation);
    let symbol = operation.slice(pos,pos+1);    
    let a = getA(operation);
    let b = getB(operation);    
    let result = operation;

    if (pos >= 0){
        switch (symbol) {
            case '+':
                result = add(a,b);
                break;
            case '-':
                result = subtract(a,b);
                break;        
            case '*':
                result = multiply(a,b);
                break;        
            case '/':
                result = divide(a,b);
                break;        
        }
    }
   
    console.log(operation);    
    console.log(a);
    console.log(symbol);
    console.log(b);
    console.log(result)

    
    if (isNaN(result)){
        result = "E";
    }; 

    document.getElementById("screen").value = result;
}

let getPosSymbol = (operation) => {
    let pos = -1;
    let value = "";
    let found = false;   
    for (let i = 0; i < operation.length; i++){       
        if (i != 0 && found == false){
            if(!isNaN(value) && isNaN(operation[i])){
                pos = i;
                found = true;
            }
            else{
                value = operation.slice(i,1);
            }            
        }
        else{
            value = operation.slice(i,1);
        }        
    }
    return pos;
}

let getA = (operation) => {
    let pos = getPosSymbol(operation);

    let value = operation.slice(0,pos);

    return parseInt(value);
}

let getB = (operation) => {

    let pos = (getPosSymbol(operation) + 1) - operation.length; 
    
    let value = operation.slice(pos);
    
    let found = false
    for (let i = 0; i < value.length; i++) {     
        if (i != 0  && found == false){
            if(isNaN(value[i]) && found == false){
                value = 'Error';
                found = true;
            }  
        }
        else if(i == 0 && isNaN(value[i]) && value[i] != '-') {
            value = 'Error';
            found = true;
        }

    }
    return parseInt(value);
}

let add = (a,b) => a + b; 
let subtract = (a,b) => a - b;
let multiply = (a,b) => a*b; 
let divide  = (a,b) => {
    let result = "Error";

    if (b != 0){
        result = a / b;
    }

    return parseInt(result);
};
