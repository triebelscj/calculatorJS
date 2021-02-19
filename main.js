
class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {

    }
    del() {

    }

}




const numButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equals]')
const prevOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
