var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};

var circle = {
  area: function (r) {
    return PI * r * r;
  },
  circumference: function (r) {
    return 2 * PI * r;
  },
};
