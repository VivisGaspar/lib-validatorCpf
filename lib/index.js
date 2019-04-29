const receiveCpf = (cpf) => cpf.substr(0, 9).split("");

const theSumMultiplication = (total) => (result, num) => result + (num * total--);

const toReceiveOfSumMultiplication = (cpf, total) =>
  cpf.reduce(theSumMultiplication(total), 0);

const restOfDivision = (num) => num % 11;

const restOfDivisionSecond = (num) => {
  if (num < 2) {
    return 0;
  } else {
    return 11 - num;
  }
};

const taketwoDigit = (cpf) => `${cpf.charAt(9)}${cpf.charAt(10)}`;

const joint = (num1, num2) => `${num1}${num2}`;

const cpfValidator = (cpfComplete) => {
  if (cpfComplete === "00000000000" || cpfComplete === "11111111111" ||
    cpfComplete === "22222222222" || cpfComplete === "33333333333" ||
    cpfComplete === "44444444444" || cpfComplete === "55555555555" ||
    cpfComplete === "66666666666" || cpfComplete === "77777777777" ||
    cpfComplete === "88888888888" || cpfComplete === "99999999999") {
    return false;
  }

  const cpf = receiveCpf(cpfComplete);

  const firstDigit = restOfDivisionSecond(restOfDivision(toReceiveOfSumMultiplication(cpf, 10)));

  const secondDigit = restOfDivisionSecond(restOfDivision(toReceiveOfSumMultiplication(cpf.concat(firstDigit), 11)));
  return taketwoDigit(cpfComplete) === joint(firstDigit, secondDigit);
};
cpfValidator("11144477735");

module.exports.cpfValidator = cpfValidator;

// const cpfValidator = require("lib-validatorCpf");
// console.log(cpfValidator("37355518828"))
// > // returns "true"
// > console.log(cpfValidate("11111111111"))
// > // returns "false"