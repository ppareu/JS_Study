const imgBOX = document.querySelector("#container > img");

imgBOX.addEventListener("mouseover", (e) => { // 마우스 가져다댐
  imgBOX.src = "images/pic-6.jpg";
});

imgBOX.addEventListener("mouseout", (e) => { // 마우스 벗어남;;
  imgBOX.src = "images/pic-1.jpg";
});