function checkPrime(num) {
  if (num <= 1 || num > 1000) {
    console.log("Данные неверны");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} не является простым числом`);
      return;
    }
  }

  console.log(`${num} является простым числом`);
}
checkPrime(555);
