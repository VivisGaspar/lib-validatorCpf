const chai = require("chai");
const expect = chai.expect;

const Number = require("../lib/index.js");

describe(" validator lib", () => {
  describe("number", () => {
    it("A soma de 1+1 = 2", () => {
      expect(Number.number(1, 1)).to.equal(2);
    });
    it("A soma de 1+2 = 3", () => {
      expect(Number.number(2, 2)).to.equal(4);
    });
  });
});