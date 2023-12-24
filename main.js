const args = process.argv;
const argv = args.slice(2);
const firstNumber = +argv[0];
const operator = argv[1];
const secondNumber = +argv[2];

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  calculation() {}
}

class Add extends Calculator {
  calculation() {
    return this.firstNumber + this.secondNumber;
  }
}

class Subtract extends Calculator {
  calculation() {
    return this.firstNumber - this.secondNumber;
  }
}

class Multiply extends Calculator {
  calculation() {
    return this.firstNumber * this.secondNumber;
  }
}

class Divide extends Calculator {
  calculation() {
    return this.firstNumber / this.secondNumber;
  }
}

const add = new Add(firstNumber, secondNumber);
const res = add.calculation();
console.log(`${firstNumber} ${operator} ${secondNumber} = ${res}`);
