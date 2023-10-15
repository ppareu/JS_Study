/*
const student = ["park", "kim", "lee", "choi", "kang"];

for (let i = 0; i < student.length; i++) {
  document.write(`${student[i]}<br>`);
}

// <br> 엔터

student.forEach((student) => {
  document.write(`${student}<br>`);
});
*/

let star = parseInt(prompt("별의 개수 입력"));

// for (let i = 0; i < star; i++) {
//   document.write("*");
// }

// while (star > 0) {
//   document.write("*");
//   star--;
// }

do {
  document.write("*");
  star--;
} while (star > 0);
