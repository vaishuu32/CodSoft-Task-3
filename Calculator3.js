
function clearScreen() {
    document.getElementById("res").value = "";
}
 

function display(value) {
    document.getElementById("res").value += value;
}
function calculate() {
    var a= document.getElementById("res").value;
    var b = eval(a);
    document.getElementById("res").value = b;
}