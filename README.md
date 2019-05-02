# lib-validatorCpf

## Sobre a biblioteca

Esta biblioteca tem o objetivo de implementar um validador de CPF para uso em aplicações web. Na **versão 1.0.0** possibilita verificar os números de CPF fazendo a validação dos dígitos retornando **true** ou **false** de acordo com cada caso.

## Como instalar

```shell
 $ npm install cpfvalidator-vg
```

## Como utilizar

```node
> const cpfValidatorVG = require("cpfvalidator-vg");
> cpfValidatorVG.cpfValidator("11144477735")
> // returns "true"

> cpfValidatorVG.cpfValidator("99999999999")
> // returns "false"
```
