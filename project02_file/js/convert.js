/*
섭씨 온도 = (화씨온도 - 32) / 1.8
Celsius : 섭씨 온도
Fahrenheit : 화씨 온도
*/

let Fahrenheit = parseFloat(prompt("섭씨 온도 입력"));
let Celsius;

Celsius = ((Fahrenheit - 32) / 1.8).toFixed(1);
alert(`${Fahrenheit}℉ = ${Celsius}℃`);
