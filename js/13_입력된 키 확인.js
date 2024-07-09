
// 준비한 이미지 파일명을 저장할 배열
const images = ["극장판 1.jpg", "극장판 2.jpg", "극장판 3.jpg", "극장판 4.jpg"];


// 클래스가 key 인 요소를 모두 얻어와 배열 형태로 저장
const keys = document.querySelectorAll(".key");
// 입력키 : Q W E R
// index  : 0 1 2 3

/* 문서 전체에 keydown 이벤트 리스너 추가 */
document.addEventListener("keydown", function(e){
  /* console.log(e); */
  let index; // index를 저장할 변수
  
  switch(e.key.toLowerCase()){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return; // 다른 키 입력 시 "종료"
  }

  /* keys[index].style.backgroundColor = "pink"; */
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

  // 글자색 투명
  // rgba(red, green, blue, alpha)
  // rgb = 0 ~ 255/ alpha(투명도) = 0(투명) ~ 1(불투명)
  keys[index].style.color = "rgba(0,0,0,0)";
});

document.addEventListener("keyup", function(e){
  /* console.log(e); */
  let index;

  // 문자열.toUpperCase()
  // 문자열.toLpwerCase()

  switch(e.key.toLowerCase()){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return;
  }

  /* keys[index].style.backgroundColor = "white"; */
  keys[index].style.backgroundImage = "none";

  // 글자색 투명
  // rgba(red, green, blue, alpha)
  // rgb = 0 ~ 255/ alpha(투명도) = 0(투명) ~ 1(불투명)
  keys[index].style.color = "rgba(0,0,0,1)";
});
  

/* 이미지가 마우스 따라다니게 하기 */

// 숨겨둔 이미지 저장 변수
const cursorImage = document.querySelector("#cursorImage");

// 문서전체에 "mousemove"(마우스가 움직였을때) 감지 추가
document.addEventListener("mousemove", function(e){
  // console.log(e);
  // e.pageX : 가로방향 마우스 위치(왼쪽에서 떨어진 px 반환)
  // e.pageY : 세로방향 마우스 위치(위쪽에서 떨어진 px 반환)

  cursorImage.style.left = `${e.pageX }px`
  cursorImage.style.top = `${e.pageY - 50}px`

})