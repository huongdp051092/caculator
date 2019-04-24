document.getElementById("addition").onclick = function () {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Division: " + (Number(number1) + Number(number2));
}
document.getElementById("subtraction").onclick = function () {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Subtraction: " + (Number(number1) - Number(number2));
}
document.getElementById("multiplication").onclick = function () {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Multiplication: " + (Number(number1) * Number(number2));
}
document.getElementById("division").onclick = function () {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Division: " + (Number(number1) / Number(number2));
}