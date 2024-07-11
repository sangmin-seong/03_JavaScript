Math.floor(Math.random() * 2) // 가위바위보 변수

const btns = document.querySelectorAll(".btn");

// 게임횟수 저장변수
const count = 1;

btns.addEventListener("click", function(){
  if(count === null){
    alert("게임 횟수를 입력해주세요");
    return;
  }else {
    alert("......");
  }
})
