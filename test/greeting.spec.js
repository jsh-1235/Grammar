const assert = require("assert");
const greeting = require("../lib/greeting");
const should = require("chai").should();

// describe("greeting", function () {
//   describe("#hello()", function () {
//     it("should save without error", function (done) {
//       if (greeting.hello() === "hello") {
//         done();
//       }
//     });
//   });

//   describe("#hi()", function () {
//     it("should save without error", function (done) {
//       if (greeting.hi() === "hi") {
//         done();
//       }
//     });
//   });
// });

// describe("greeting", function () {
//   describe("#hello()", function () {
//     it("should save without error", function () {
//       assert.equal(greeting.hello(), "hello");
//     });
//   });

//   describe("#hi()", function () {
//     it("should save without error", function () {
//       assert.equal(greeting.hi(), "hi");
//     });
//   });
// });

describe("greeting", function () {
  describe("#hello()", function () {
    it("should save without error", function () {
      greeting.hello().should.equal("hello");
    });
  });

  describe("#hi()", function () {
    it("should save without error", function () {
      greeting.hi().should.equal("hi");
    });
  });
});
