let num1 = parseInt(prompt("첫 번째 양의 정수 입력 : "));
let num2 = parseInt(prompt("두 번째 양의 정수 입력 : "));
let result;

// ANd 연산 둘다 true여야 결과 값이 true
if (num1 % 2 === 0 && num2 % 2 === 0) {
  result = "두 수는 모두 짝수입니다.";
} else {
  result = "짝수가 아닌 수가 있습니다.";
}

alert(result);

if (num1 > 10 && num2 > 10) console.log("둘다 10보다 큽니다.");

if (num1 > 10 || num2 > 10) console.log("둘 중에 하나는 10보다 큽니다.");
