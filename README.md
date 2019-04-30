# lib-validatorCpf

## Sobre a biblioteca

Esta biblioteca tem o objetivo de implementar um validador de CPF para uso em aplicações web. Na **versão 1.0.0** possibilita verificar os números de CPF fazendo a validação dos dígitos retornando **true** ou **false** de acordo com cada caso.

## Como instalar

```shell

$  npm install lib-validatorcpf

```

## Como utilizar

```node

> const cpfvalidator = require("lib-validatorcpf");
> cpfValidator.lib-validatorcpf("11144477735")
> // returns "true"

> cpfValidator.lib-validatorcpf("99999999999")
> // returns "false"


```
