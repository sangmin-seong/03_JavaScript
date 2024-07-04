/* 전역 변수 (JS 전체에서 공용으로 사용할 변수) */
// 잔액이 출력되는 span 요소
const output = document.getElementById("output");

// 금액이 입력되는 input 요소
const amount = document.getElementById("amount");

// 잔액 기록 변수 (초기값 10000)
let balance = 10000;       

//비밀번호 저장 변수(초기 비밀번호 1234)
let password = '1234';      // 비밀번호 변경기능 추가

//--------------------------------------------------------------------------------------------------

//함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩시 자동으로 해석되어 수행된다!
output.innerText = balance;


// 아이디가 amount인 input 요소에 작성된 값을 삭제
amount.value = '';

function test(){
  //propmt 연습

  // prompt()
  // - alert() 처럼 알림창이 브라우저에 열리면서 
  // 추가적으로 문자열 입력칸 + 확인 + 취소 버튼이 생성

  // - 확인 클릭 : 입력한 내용 반환
  // - 취소 클릭 : null 반환

  const pw = prompt("비밀번호를 입력하세요")

  console.log("pw : ", pw);

  if(pw === null){//취소를 누른 경우
    alert("비밀번호 입력이 취소되었습니다.");
    return;
  }

  // pw : 입력받은 값 
  // password : 전역 변수 ("1234")
  if(pw !== password){
    alert("비밀번호가 맞지 않습니다.")
    return;
  }

  // 입력한 비밀번호가 password와 일치한 경우
  alert("출금이 진행됩니다.")
}

/** 입금 */
function deposit(){
  const value = Number(amount.value);

  if(value >= 0){
    balance = balance + value;
    output.innerText = balance;
    amount.value = '';
    }
}

/** 출금 */
function withdrawal(){
  const value = Number(amount.value);
  const pw = prompt("비밀번호를 입력하세요")

  console.log("pw : ", pw);

  if(value > balance){
    alert("출금 금액이 잔액보다 클 수 없습니다")
    return;
  }
    if(pw === null){//취소를 누른 경우
    alert("비밀번호 입력이 취소되었습니다.");
    return;
  }  
  if(pw !== password){
    alert("비밀번호가 맞지 않습니다.")
    return;
  }
  if(pw === password){
    alert("출금 되었습니다.")
    balance = balance - value;
    output.innerText = balance;
    amount.value = '';
  }
}

function change(){
  const change = prompt('변경할 비밀번호를 기입하시오.')

  if(change === null){//취소를 누른 경우
    alert("비밀번호 변경이 취소되었습니다.");
    return;
  }

  if(change === password){
    alert("변경할 비밀번호가 기존과 동일합니다.");
    return;
  }

  if(change !== password){
    alert("비밀번호가 변경됩니다.");
    password = change;    
  }
}