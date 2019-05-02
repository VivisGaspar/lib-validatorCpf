const cpfValidator = (cpf) => {
  const CPF_STRING = `${cpf}`;
  const CPF_VALUE = CPF_STRING.slice(0, 9);
  const CPF_DV_VALUE = CPF_STRING.slice(-2);

  const calcMultiply = (cpf, multiply) => cpf.split("").reduce((acc, curr) => {
    return acc + parseInt(curr) * multiply--;
  }, 0);

  const calcMod11 = (num) => {
    return num % 11;
  };

  const calcDV = (num) => {
    if (num < 2) {
      return 0;
    } else {
      return 11 - num;
    }
  };

  const isEqual = (cpf) => cpf.split("").every((value) => {
    return value === cpf[0];
  });

  if (isEqual(CPF_VALUE)) {
    return false;
  }

  const firstDV = calcDV(calcMod11(calcMultiply(CPF_VALUE, 10)));
  const secondDV = calcDV(calcMod11(calcMultiply(CPF_VALUE.concat(firstDV), 11)));

  const result = CPF_DV_VALUE === `${firstDV}${secondDV}`;
  return result;
};

module.exports.cpfValidator = cpfValidator;

