let arr = [0, 1, "2", null, 3, "four", undefined, 5, false, 6, 12222, 0];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
function chooseCount() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }
  console.log(`Четных элементов: ${evenCount}`);
  console.log(`Нечетных элементов: ${oddCount}`);
  console.log(`Нулей: ${zeroCount}`);
}
chooseCount();
