const display = document.getElementById("greenn");
var textel = Document.getElementByClassName("text");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    textel.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value ="Error";
    }
    
    

}
