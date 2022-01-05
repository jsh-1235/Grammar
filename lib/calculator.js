// module.exports = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

module.exports = {
  a: 0,
  b: 0,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};
