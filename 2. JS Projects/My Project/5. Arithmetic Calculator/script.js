const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const btn = document.getElementById("btn");


btn.addEventListener("click", calculate);


function calculate(){

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let op = operator.value;

    let output;

    switch(op){

        case "+":
            output = n1 + n2;
            break;

        case "-":
            output = n1 - n2;
            break;

        case "*":
            output = n1 * n2;
            break;

        case "/":
            if(n2 === 0){
                output = "Cannot divide by 0";
            }else{
                output = n1 / n2;
            }
            break;

        default:
            output = "Invalid operator";

    }

    result.value = output;

}

function changeOperator(selectOperator) {
    let btnEl = document.getElementById("btn");
    let value = selectOperator.value;

    if (value == "+") {
        btnEl.innerText = "Add";
    } else if (value == "-") {
        btnEl.innerText = "Subtract";
    } else if (value == "*") {
        btnEl.innerText = "Multiply";
    } else if (value == "/") {
        btnEl.innerText = "Divide";
    }
}
