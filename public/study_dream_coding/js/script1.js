"use strict";

function sum(size) {
  let result = 0;

  for (let i = 0; i < size; i++) {
    result += i;
  }

  return result;
}

console.log("page 1", sum(100000000));
