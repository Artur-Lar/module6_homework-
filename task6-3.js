function newValue(x) {
  return function (y) {
    return x + y;
  };
}

const addThree = newValue(3);
console.log(addThree(5));
