const viewBtn = document.querySelector("#view"); // view라는 id 값의 버튼을 누르는거 설정
const detail = document.querySelector("#detail"); // detail id 값을 토글 형식으로 상세 설명 보이게 하기

viewBtn.onclick = function() {
  detail.classList.toggle("hidden");
}