/* .js 파일내부를 <script> 태그 내부라고 생각 */

// 함수 선언 : 기능 만들기
function externalFn(){
// 함수 정의 : 기능 발휘 형태

alert("External 확인 버튼이 클릭됨")
alert("이번에 alert 두번")
}

// --------------------------------------------------------------

// JS 맛보기
// - 버튼 클릭 시 body 태그의 글자색, 배경색을 변경

// html 문서에서 body 태그 선택
const body = document.querySelector("body");

// 라이트 모드 변경함수
function lightMode(){
  body.style.color ="black"; // body 태그의 글자색을 black으로 설정
  body.style.backgroundColor = "white"; //body 태그의 배경색을 white로 설정
}

// 다크 모드 변경함수
function darkMode(){
  body.style.color = "white";
  body.style.backgroundColor = "black";
}
