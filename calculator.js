
let display = document.querySelector('#result');

const input = function(element){
        display.value += element;
    }

function clearButtonClicked(){
    display.value = "";
}

function totalButtonClicked(){
    display.value = eval(display.value);
}














