let num = prompt("1보다 큰 숫자를 입력하세요");
let result = 0;

if (num !== null && num > 1) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      continue;
    }
    result += i;
    document.write(`${i} ------ ${result}<br>`);
  }
}
