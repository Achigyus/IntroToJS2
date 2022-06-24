let firstNum = parseInt(prompt("Hello this is a simple JS calculator 🧮. \nIt performs arithmetic operations on two integers, \nPlease input the first number"))
let secondNum = parseInt(prompt("Input the second number"))
let operation = prompt("Select an operation from below\n+, -, *, /.")
let result

if (operation == "+"){
    result = firstNum + secondNum
    alert(`The result of ${firstNum} by ${secondNum} is ${result}`)
}

else if (operation == "-"){
    result = firstNum - secondNum
    alert(`The difference between ${firstNum} and ${secondNum} is ${result}`)
}

else if (operation == "/"){
    result = firstNum / secondNum
    alert(`The division of ${firstNum} by ${secondNum} is ${result}`)
}

else if (operation == "*"){
    result = firstNum * secondNum
    alert(`The product of ${firstNum} and ${secondNum} is ${result}`)
}

else{
    alert(`Invalid operation! Please try again and choose an operation between; \n +, -, /, *`)
}
