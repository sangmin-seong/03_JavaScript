// 각 요소 저장할 변수 선언
const width = document.querySelector("#test1");
const height = document.querySelector("#test2");
const fontSize = document.querySelector("#test3");
const color = document.querySelector("#test4");
const backgroundColor = document.querySelector("#test5");


const input = document.querySelector("#test6");


//button
const changeBtn = document.querySelector("#changeButton");

changeBtn.addEventListener("click", function (e) {
  /*  console.log(e); */

  //결과 도출
  const box = document.querySelector(".result");

  if (width !== null) {
    box.style.width = width.value + "px";
  }
  if (height !== null) {
    box.style.height = height.value + "px";
  }
  if (fontSize !== null) {
    box.style.fontSize = fontSize.value + "px";
  }
  if (color !== null) {
    box.style.color = color.value;
  }
  if (backgroundColor !== null) {
    box.style.backgroundColor = backgroundColor.value;
  }

  const pointBtn1 = document.querySelector("[name=checkbox1]:checked");
  let point1;

  if (pointBtn1 == null) point1 = "normal";
  else  point1 = pointBtn1.value;

  box.style.fontWieght = point1;

  const pointBtn2 = document.querySelector("[name=checkbox2]:checked");
  let point2;

  if (pointBtn2 == null) point2 = "flex-start";
  else  point2 = pointBtn2.value;
  
  box.style.justifyContent = point2;

  const pointBtn3 = document.querySelector("[name=checkbox3]:checked");
  let point3;

  if (pointBtn3 == null) point3 = "self-start";
  else  point3 = pointBtn3.value;

  box.style.alignItems = point3;

  box.innerHTML = `<span>${input.value}</span>`
  input.value = '';
})