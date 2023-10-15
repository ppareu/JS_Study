const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

document.write(`<p>주어진 배열 : [${arr}]<p>`);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    document.write(`${arr[i]} `);
  }
}
