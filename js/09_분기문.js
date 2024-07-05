/** break 확인 */
function check1(){

  // 1~10까지 1씩 증가하는 반복문
  // 단, 5를 출력한 후 멈춤

  for(num = 1 ; num <= 10; num++){
    console.log(num);
    if(num == 5) break;
  }
}

function check2(){
  let sum = 0; //합계 저장용 변수

  // while은 조건식이 true일 때 반복실시, true로 작성 시 조건식이 false 되는 경우가 없음.
  //                                      -> 무한반복

  // * 무한반복 코드에는 break를 포함한 if를 작성해 종료조건을 두어야한다!!!!!!!
  while(true){ 
    const value = prompt("숫자 입력"); // 취소 -> null

    // 취소 클릭 시 반복 종료
    if(value === null) break;

    // 확인 클릭 시 sum에 입력한 숫자를 누적
    sum += Number(value);
  }

  alert("합계 : " + sum);
}

function check3(){
  for(let num = 1 ; num <= 20 ; num++){
    if(num % 3 === 0) continue;
    console.log(num);
  }
}

/** continue + 중첩반복문에서의 분기문 */
function check4(){

  ////123456789를 5줄출력
  //단, 1번에서는 1제외
  // n번줄에서 n제외

  for(row = 1 ; row <= 5; row++){
    
    let str = '';

    for(col = 1; col <= 9; col++){
      if(row === col)continue;
      str += col;      
    }
    console.log(str);
  }
}

// UP & DOWN GAME
function startGame(){

  // 난수 생성
  const answer = Math.floor(Math.random() * 200) + 1;

  //test 후 삭제
  // console.log("정답 : ", answer);

  //---------------------------------------------------------------------------

  // 입력횟수 세기위한 변수
  let count = 0; 
  
  //---------------------------------------------------------------------------

  let str = "1부터 200 사이 숫자를 입력하세요";

  while(true){//무한반복

    let input  = prompt(str);

    if(input == null) {
      alert("게임포기");
      break;
    }
    //숫자입력 후 확인 클릭
    const value = Number(input);

    //잘못 입력한 경우
    if( isNaN(value) ){
      alert("숫자를 입력해주세요");
      continue;
    }

    if(value < 1 || value > 200){
      alert("1~200 사이 값만 입력해주세요");
      continue;
    }


    // 정답을 입력하였음, count를 증가
    count++;

    // 정답인 경우
    if(input == answer) {
      alert(`${answer}정답 / 시도횟수 ${count}`);
      break;
    }
    // 정답이 아닌 경우
    if(answer < value){// ㄴvalue 값이 큰 경우
      str = `${value} [DOWN] / 시도횟수 ${count}`
    };    
    if(answer > value){// value 값이 작은 경우
      str = `${value} [UP] / 시도횟수 ${count}`
    };
  }

}