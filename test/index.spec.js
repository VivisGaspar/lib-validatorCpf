const chai = require("chai");
const expect = chai.expect;
const validator = require("../lib/index.js");

describe("validator", () => {
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("11144477735")).to.equal(true);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("37355518828")).to.equal(true);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("00000000000")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("99999999999")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("vxvxvxvxvxv")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("vx@#$%¨&*()")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("qvxxxxxqweq")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("11111111111")).to.equal(false);
  });
  it(" O CPF é válido", () => {
    expect(validator.cpfValidator("123456789")).to.equal(false);
  });
});

