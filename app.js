let number = Number(prompt("please enter a number"));
let operator = prompt("please enter +, -, *, /");
let number2 = Number(prompt( "please enter a second number"));

let result;

if (isNaN(number))
{
   result = "that is not a number"
    document.body.innerHTML = result
}

if(isNaN(number2))
{
    result = "that is not a number"
}

//operator
else if(operator === "+")
{
    result = number + number2;
}
else if(operator === "-")
{
    result = number - number2;
}
else if(operator === "*")
{
    result = number * number2;
}
else if(operator === "/")
{
    result = number / number2;
}
else
{
    result = "that is not an operator"
}

document.body.innerHTML = result