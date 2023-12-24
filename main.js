class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  calculation(operator) {}
}

class Adding extends Calculator {
  calculation() {
    return this.firstNumber + this.secondNumber;
  }
}

const add = new Adding(2, 4);
const res = add.calculation();
console.log(res);
