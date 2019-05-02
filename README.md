# lib-validatorCpf

## Sobre a biblioteca

Esta biblioteca tem como objetivo implementar um validador de CPF para uso em aplicações web. É possível verificar o número do CPF retornando **true** ou **false** de acordo com o valor verificado.

## Como instalar

```sh
npm install cpfvalidator-vg
```

## Como utilizar

```javascript
> const cpfValidatorVG = require("cpfvalidator-vg");
> cpfValidatorVG.cpfValidator("11144477735")
> // returns "true"

> cpfValidatorVG.cpfValidator("99999999999")
> // returns "false"
```
