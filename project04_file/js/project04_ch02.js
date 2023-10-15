// 최대공약수 : Greatest Common Divisor (GCD)

function getGCD(a, b) {

  let max = a > b ? a : b;
  let GCD = 0;
  
  for (let i = 1; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

const num1 = parseInt(prompt("첫 번쨰 숫자를 입력"));
const num2 = parseInt(prompt("두 번쨰 숫자를 입력"));

const result = getGCD(num1, num2)
console.log(`${num1}와(과) ${num2}의 최대공약수는 ${result}입니다.`)