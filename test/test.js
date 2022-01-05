const assert = require("assert");
const calculator = require("../lib/calculator");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("calculator", function () {
  before(function () {
    // 블록 범위 내 모든 테스트 전에 실행
    console.log("before hook");
    calculator.a = 20;
    calculator.b = 10;
  });

  after(function () {
    // 블록 범위 내 모든 테스트 후에 실행
    console.log("after hook");
  });

  beforeEach(function () {
    // 블록 범위 내 각 테스트 직전에 실행
    console.log("beforeEach hook");
  });

  afterEach(function () {
    // 블록 범위 내 각 테스트 직후에 실행
    console.log("afterEach hook");
  });

  describe("#add()", function () {
    it("should save without error", function (done) {
      if (calculator.add() === 30) {
        done();
      }
    });
  });

  describe("#subtract()", function () {
    it("should save without error", function (done) {
      if (calculator.subtract() === 10) {
        done();
      }
    });
  });

  // describe("#add()", function () {
  //   it("should save without error", function (done) {
  //     if (calculator.add(1, 2) === 3) {
  //       done();
  //     }
  //   });
  // });

  // describe("#subtract()", function () {
  //   it("should save without error", function (done) {
  //     if (calculator.subtract(1, 2) === -1) {
  //       done();
  //     }
  //   });
  // });
});
