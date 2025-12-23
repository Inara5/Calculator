function addition(a, b) {
    let sum = a + b
    return sum
}

console.log(addition(223, 100))

function subtraction(a, b) {
    let difference = a - b
    return difference
}

console.log(subtraction(100, 9))

function multiplication(a, b) {
    let product = a * b
    return product
}

console.log(multiplication(9, 9))

function division(a, b) {
    let quotient = a / b
    return quotient
}

console.log(division(81, 9))

let firstNumber = 0
let operator = "";
let secondNumber = 0

function operate(operator, num1, num2) {
    if (operator = plus) {
        addition(num1, num2)
    } else if (operator = minus) {
        subtraction(num1, num2)
    } else if (operator = multiply) {
        multiplication(num1, num2)
    } else if (operator = divide) {
        division(num1, num2)
    }
}