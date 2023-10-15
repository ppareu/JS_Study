const username = document.querySelector("#username");
const major = document.querySelector("#major");
const btn = document.querySelector("form > button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let tbody = document.querySelector("#attendant > tbody")
  let newTr = document.createElement("tr");

  // 이름
  let nameTd= document.createElement("td");
  nameTd.innerText = username.value;
  username.value = "";
  
  // 전공
  let majorTd = document.createElement("td");
  majorTd.innerText = major.value;
  major.value = "";

  // 이름 전공을 줄에 추가
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);

  // tbody안에 줄 추가
  tbody.appendChild(newTr);
});
