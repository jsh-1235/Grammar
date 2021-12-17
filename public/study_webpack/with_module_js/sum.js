var word = "Hello";

function sum(list) {
  let result = 0;

  for (var i = 0; i < list.length; i++) {
    result += list[i];
  }

  return result;
}

export default sum;
