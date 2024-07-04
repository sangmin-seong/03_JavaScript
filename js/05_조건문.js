function check1() {
  const input1 = document.getElementById("input1");

  const value = Number(input1.value);

  // 입력받은 값이 0보다 큰 경우 true(라는 조건식 작성)
  if (value > 0) {
    alert(`${value}은/는 양수입니다.`);
  }
  if (value <= 0) {
    alert(`${value}은/는 양수가 아닙니다.`);
  }
}

/** if ~ else 예시 - 0 ~ 99 난수 홀짝 판별 */
function check2() {
  // 난수 발생 : Math.random()
  //          -> 0.0 <= 난수 <1.0

  // 소수점 내림처리 : Math.floor(실수)
  //                   -> 소수점 첫째 자리에서 내림 처리, 정수형태로 변환

  const randomNumber = Math.floor(Math.random() * 100)
  if (randomNumber % 2 === 0) {
    alert(`${randomNumber}은/는 짝수 입니다`)
  }
  else {
    alert(`${randomNumber}은/는 홀수 입니다`)
  }
}

/* 양수, 음수, 0 판별 */
function check3() {
  const inpput3 = document.getElementById("input3");
  const value = Number(input3.value)

  let result; //결과 저장 변수


  //양수판별
  if (value > 0) {
    result = "양수"
  }

  //음수판별
  else if (value < 0) {
    result = "음수"
  }

  //0인 경우 판별
  else {
    result = "0"
  }

  alert(`${value}은/는 ${result}입니다.`)
}

function ageCheck() {
  const age = document.getElementById("age");
  const value = Number(age.value)

  let result;

  if (value > 0 && value <= 13) {
    result = "어린이입니다.";
  }
  else if (value > 13 && value <= 19) {
    result = "청소년입니다.";
  }
  else if (value > 19 && value <= 120) {
    result = "성인입니다.";
  }
  else {
    result = "잘못 입력하였습니다.";
  }
  alert(`${value}은/는 ${result}`);
}
//V.2
function ageCheck2() {
  const age = document.getElementById("age");
  const value = Number(age.value)

  let result;

  if (value < 0 || value > 120) result = "잘못 입력";
  else if (value <= 13) result = "어린이";
  else if (value <= 19) result = "청소년"
  else result = "성인"

  alert(`${value}은/는 ${result}`);
}
/* 
  - if, else if, else 에서 앞선 if의 조건이 false가 되면 이후 조건에서 범위가 제외된다.
  - if, else if, else, for, while 등 {} 내부 코드가 한줄만 존재하는 경우 {}생략 가능
*/

function check4() {
  const input4 = document.getElementById("input4");
  const value = Number(input4.value);

  //입력된 값이 없다면 : 값을 입력해 주세요
  if (input4.value.length === 0) {
    //문자열.length == 문자열의 길이를 반환
    alert(`값을 입력해 주세요`)
  } else {
    if (value >= 0) {
      if (value % 3 === 0) {
        alert("YES")
      } else {
        alert("NO")
      }
    } else {
      alert(`양수만 입력해주세요`)
    }
  }
}


//배수 판별
function check5(){
  const a = document.getElementById("input5a");
  const b =document.getElementById("input5b");

  if(a.value.length === 0 || b.value.length === 0){
    alert("입력되지 않은 값이 존재합니다");
    return; // Early Return : 함수를 여기서 끝냄
  }

  const valueA = Number(a.value);
  const valueB = Number(b.value);

  if(valueA < valueB){
    alert("A가 B보다 작습니다");
    return;
  }
  if(valueA % valueB === 0){
    alert("배수맞음")
  }
  else{
    alert("배수아님")
  }

}



// 매개 변수(Parameter)
// - 함수 호출시 전달된 값(전달인자, Arguments)을 저장하는 변수

/** switch 버전 계산기만들기 
 * @param op : 전달받은 연산 기호
*/
function calc(op){
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const value1 = Number(number1.value)
  const value2 = Number(number2.value)

  console.log(value1, value2, op);

  let result;

  //op 값에 따라 알맞은 case 실행
  switch(op){
    case '+': result = value1 + value2; /* break */
    case '-': result = value1 - value2; break
    case '*': result = value1 * value2; break
    case '/': result = value1 / value2; break
    case '%': result = value1 % value2; /* break */
    default : result = "잘못된 연산자";
  }

  document.getElementById("calcResult").innerText = result;
}


function check6(){

  const input6 = document.getElementById("input6");
  const value = Number(input6.value);

  let result;

  switch(value){
    case 3:
    case 4:
    case 5: result = "봄"; break;
    case 6:
    case 7:
    case 8: result = "여름"; break;
    case 9:
    case 10:
    case 11: result = "가을"; break;
    case 12:
    case 1:
    case 2: result = "겨울"; break;
    default : result = "잘못입력"
  }
  alert(result);

}