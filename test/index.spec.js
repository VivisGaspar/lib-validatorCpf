const chai = require("chai");
const expect = chai.expect;
const validator = require("../lib/index.js");

describe("validator", () => {
  it("The CPF is valid: '11144477735'", () => {
    expect(validator.cpfValidator("11144477735")).to.equal(true);
  });
  it("The CPF is valid: '88601010008'", () => {
    expect(validator.cpfValidator("88601010008")).to.equal(true);
  });
  it("The CPF is valid: '71650632932'", () => {
    expect(validator.cpfValidator("71650632932")).to.equal(true);
  });
  it("The CPF is valid: 71650632932", () => {
    expect(validator.cpfValidator(71650632932)).to.equal(true);
  });
  it("The CPF is not valid: 22222222222", () => {
    expect(validator.cpfValidator(22222222222)).to.equal(false);
  });
  it("The CPF is not valid: '33333333333'", () => {
    expect(validator.cpfValidator("33333333333")).to.equal(false);
  });
  it("The CPF is not valid: '99999999999'", () => {
    expect(validator.cpfValidator("99999999999")).to.equal(false);
  });
  it("The CPF is not valid: 'vxvxvxvxvxv'", () => {
    expect(validator.cpfValidator("vxvxvxvxvxv")).to.equal(false);
  });
  it("The CPF is not valid: 'vx@#$%¨&***'", () => {
    expect(validator.cpfValidator("vx@#$%¨&***")).to.equal(false);
  });
  it("The CPF is not valid: 'qvxxxxxqweq'", () => {
    expect(validator.cpfValidator("qvxxxxxqweq")).to.equal(false);
  });
  it("The CPF is not valid: '11111111111'", () => {
    expect(validator.cpfValidator("11111111111")).to.equal(false);
  });
  it("The CPF is not valid: '123456789'", () => {
    expect(validator.cpfValidator("123456789")).to.equal(false);
  });
});

