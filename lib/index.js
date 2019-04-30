const receiveCpf = (cpf) => cpf.toString().slice(0, 9).split("");

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

const taketwoDigit = (cpf) => {
  const convertString = cpf.toString();
  return `${convertString.charAt(9)}${convertString.charAt(10)}`;
};

const joint = (num1, num2) => `${num1}${num2}`;

const cpfValidator = (cpfComplete) => {
  const convertsCpfString = cpfComplete.toString();
  if (convertsCpfString === "00000000000" || convertsCpfString === "11111111111" ||
    convertsCpfString === "22222222222" || convertsCpfString === "33333333333" ||
    convertsCpfString === "44444444444" || convertsCpfString === "55555555555" ||
    convertsCpfString === "66666666666" || convertsCpfString === "77777777777" ||
    convertsCpfString === "88888888888" || convertsCpfString === "99999999999") {
    return false;
  }

  const cpf = receiveCpf(cpfComplete);

  const firstDigit = restOfDivisionSecond(restOfDivision(toReceiveOfSumMultiplication(cpf, 10)));

  const secondDigit = restOfDivisionSecond(restOfDivision(toReceiveOfSumMultiplication(cpf.concat(firstDigit), 11)));
  return taketwoDigit(cpfComplete) === joint(firstDigit, secondDigit);
};

module.exports.cpfValidator = cpfValidator;

// const cpfValidator = require("./index);

