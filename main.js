const args = process.argv;
const argv = args.slice(2);

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

let obj;

switch (argv[1]) {
  case "+":
    obj = new Add(+argv[0], +argv[2]);
    break;
  case "-":
    obj = new Subtract(+argv[0], +argv[2]);
    break;
  case "*":
    obj = new Multiply(+argv[0], +argv[2]);
    break;
  case "/":
    obj = new Divide(+argv[0], +argv[2]);
    break;
  default:
    obj = new Add(+argv[0], +argv[2]);
}

console.log(`${argv[0]} ${argv[1]} ${argv[2]} = ${obj.calculation()}`);
