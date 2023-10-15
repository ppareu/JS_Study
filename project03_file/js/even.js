let userNumber;

do {
  userNumber = prompt("숫자 입력하세요");
  if (userNumber === null) {
    // 사용자가 취소 버튼을 누르면 반복 종료
    break;
  }
  userNumber = parseInt(userNumber);

  if (isNaN(userNumber)) {
    alert("올바른 숫자를 입력하세요.");
  } else {
    userNumber % 2 === 0
      ? alert(`${userNumber} : 짝수`)
      : alert(`${userNumber} : 홀수`);
  }
} while (isNaN(userNumber));
