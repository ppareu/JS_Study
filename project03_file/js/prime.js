let num = parseInt(prompt("자연수 입력"));
let isPrime;

if (num === 1) {
  alert(`${num}은 소수도, 합성수도 아니다.`);
} else if (num === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
}

if (isPrime) {
  document.write(`${num}는 소수입니다.`);
} else {
  document.write(`${num}는 소수가 아닙니다.`);
}
