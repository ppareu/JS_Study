// 최대공약수 : Greatest Common Divisor (GCD)

const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const btn = document.querySelector("button");
let result = document.querySelector("#result");

btn.onclick = function() {
  result.innerText = getGCD(num1.value, num2.value);
}

// 최대공약수 공식
function getGCD(num1, num2) {

  let max = num1 > num2 ? num1 : num2;
  let GCD = 0;
  
  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}