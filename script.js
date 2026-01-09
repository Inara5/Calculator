let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let decimal = document.getElementById("decimal")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let times = document.getElementById("times")
let divide = document.getElementById("divide")
let equals = document.getElementById("equals")
let backspace = document.getElementById("backspace")
let clear = document.getElementById("clear")

let display = document.getElementById("display")

let firstNumber = 0
let operator = ""
let secondNumber = 0

let done = 0
let counter = 0

document.addEventListener("keydown", (e) => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.filter(num => {
        if (e.key == num) {
            if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.key
        }
    })
})
document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        if (done > 0) {
        display.textContent = ""
    }
    display.textContent = display.textContent.slice(0, -1)
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "+") {
        counter += 1
    console.log(counter)
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "plus"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "plus"
        display.textContent = ""
    }
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "-") {
        counter += 1
    console.log(counter)
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "minus"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "minus"
        display.textContent = ""
    }
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "*") {
        counter += 1
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "times"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "times"
        display.textContent = ""
    }
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "/") {
        counter += 1
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "divide"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "divide"
        display.textContent = ""
    }
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        secondNumber = Number(display.textContent)
    if (firstNumber == 0 && secondNumber == 0 && operator == "divide") {
        display.textContent = "Not Possible !"
        firstNumber = 0
        operator = ""
        secondNumber = 0
        counter = 0
        done = 1
    } else if (display.textContent == "" && done == 0 || firstNumber == display.textContent && done == 1) {
        alert("Please choose a number first !")
    } else if (operator == "" && done == 1){
        alert("Please choose a number or operator first !")
    } else if (display.textContent !== "" && operator == "") {
        alert("Please choose an operator first !")
    } else {
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        done = 1
        counter = 0
        firstNumber = 0
        operator = ""
        secondNumber = 0
    }
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key == "c") {
        display.textContent = ""
        done = 0
        firstNumber = 0
        operator = ""
        secondNumber = 0
        counter = 0
    }
})

one.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
two.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
three.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
four.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
five.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
six.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
seven.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
eight.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
nine.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
zero.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
})
/*decimal.addEventListener("click", (e) => {
    if (done > 0) {
        display.textContent = ""
    }
    done = 0
    display.textContent += e.target.textContent
}, {once:true}
)*/
backspace.addEventListener("click", () => {
    if (done > 0) {
        display.textContent = ""
    }
    display.textContent = display.textContent.slice(0, -1)
})

plus.addEventListener("click", () => {
    counter += 1
    console.log(counter)
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "plus"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "plus"
        display.textContent = ""
    }
})
minus.addEventListener("click", () => {
    counter += 1
    console.log(counter)
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "minus"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "minus"
        display.textContent = ""
    }
})
times.addEventListener("click", () => {
    counter += 1
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "times"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "times"
        display.textContent = ""
    }
})
divide.addEventListener("click", () => {
    counter += 1
    if (display.textContent == "" && operator == "" || done !== 0 && operator !== "" || display.textContent == "Not Possible !") {
        alert("Please choose a number first !")
        counter -= 1
    } else if (counter > 1) {
        secondNumber = Number(display.textContent)
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        firstNumber = answer
        operator = "divide"
        done = 1
    } else {
        firstNumber = Number(display.textContent)
        operator = "divide"
        display.textContent = ""
    }
})

equals.addEventListener("click", () => {
    secondNumber = Number(display.textContent)
    if (firstNumber == 0 && secondNumber == 0 && operator == "divide") {
        display.textContent = "Not Possible !"
        firstNumber = 0
        operator = ""
        secondNumber = 0
        counter = 0
        done = 1
    } else if (display.textContent == "" && done == 0 || firstNumber == display.textContent && done == 1) {
        alert("Please choose a number first !")
    } else if (operator == "" && done == 1){
        alert("Please choose a number or operator first !")
    } else if (display.textContent !== "" && operator == "") {
        alert("Please choose an operator first !")
    } else {
        let answer = operate(operator, firstNumber, secondNumber)
        display.textContent = answer
        done = 1
        counter = 0
        firstNumber = 0
        operator = ""
        secondNumber = 0
    }
})

clear.addEventListener("click", () => {
    display.textContent = ""
    done = 0
    firstNumber = 0
    operator = ""
    secondNumber = 0
    counter = 0
})

function addition(a, b) {
    let sum = Number(a + b)
    return sum
}

function subtraction(a, b) {
    let difference = a - b
    return difference
}

function multiplication(a, b) {
    let product = a * b
    return product
}
function division(a, b) {
    let quotient = a / b
    if (Number.isInteger(quotient)) {
        return quotient
    } else {
        return Math.round(quotient * 10) /  10
    }
}

function operate(operator, num1, num2) {
    if (operator == "plus") {
        return addition(num1, num2)
    } else if (operator == "minus") {
        return subtraction(num1, num2)
    } else if (operator == "times") {
        return multiplication(num1, num2)
    } else if (operator == "divide") {
        return division(num1, num2)
    }
}