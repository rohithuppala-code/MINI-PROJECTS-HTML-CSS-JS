const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() { 
    try {
        if(display.value.slice(0,3)=="sin"){
        display.value = eval(Math.sin(display.value.slice(4,-1)));
        }
        else if(display.value.slice(0,3)=="cos"){
            display.value = eval(Math.cos(display.value.slice(4,-1)));
        }
        else if(display.value.slice(0,3)=="tan"){
            display.value = eval(Math.tan(display.value.slice(4,-1)));
        }
        else{
            display.value = eval(display.value)
        }
    } 
    catch(error) {
        display.value = 'Error';
    }
}
