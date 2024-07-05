/* [for문 작성법]
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/

/** 12345 출력 */
function check1(){

  //num이 1부터 시작해서 1씩 증가하다가 num 값이 5 이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1; num < 6 ; num++){
    console.log(num);
  }
}

function check2(){
  for(let num = 1; num < 11 ; num++){
    console.log(num);
  }
}

function check3(){
  for(let num = 5; num < 14 ; num++){
    console.log(num);
  }
}

function check4(){

  let result = ''; //결과 저장용 변수에 빈칸(string);

  for(let num = 1; num < 6 ; num++){
    result +=num; // result = result + num;
  }
  console.log(result);
}


function check5(){

  let sum = 0; 

  for(let num = 1; num < 101 ; num++){
    sum +=num; // result = result + num;
  }
  console.log(sum);
}


function check6(){
  for(let num = 1; num < 11 ; num += 2){
    console.log(num);
  }
}

function check7(){
  
  for(let num = 3; num < 31 ; num += 3 ){
    
    console.log(num);
  }
}

function check8(){
  let sum = 0;
  for(let num =1 ; num <= 20 ; num++){
    if(num % 4 === 0){
    console.log(num);
    sum += num;
    }
  }
  console.log("합계 : ", sum);
}

function check9(){

  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multi = document.getElementById("multiple9");

  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multi.value);

  let sum = 0;

  for(let num = s ; num <= e ; num++){
    if(num % m === 0){
      console.log(num);
      sum += num;
    }
  }
  console.log("합계 : ", sum);
}

function check10(){
  // 단이 입력되는 요소 얻어오기
  const input = document.getElementById("dan10");

  
  // 단이 입력되지 않은 경우
  if(input.value.length == 0){
    alert("내용을 입력해주세요.");
    return; // 함수 즉시종료, 호출한 곳으로 즉시 돌아감
  }

  // 단이 2~9사이가 아닌 경우
  const dan = Number(input.value);

  if(dan < 2 || dan > 9){
    arlert("2~9사이 숫자를 입력해주세요.");
    return;
  }

  for(let num =1 ; num <=9 ; num++){
    console.log(`${dan}X${num}=${dan*num}`);
  }
}


function check11(){
  for(let num=10 ; num > 0; num--){
    console.log(num);
  }
}

function check12(){
  const input = document.getElementById("dan12");

  if(input.value.length == 0){
    alert("내용을 입력하세요.");
    return;
  }

  const dan = Number(input.value);

  if(dan < 2 || dan > 9){
    arlert("2~9사이 숫자를 작성해 주세요");
    return;
  }

  for(let num = 9 ; num >= 2 ; num--){
    console.log(`${dan}X${num}=${dan * num}`);
  }
}


function check13(){
  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  const inp = Number(input.value);
  const shape = output.value;
 
  let str = '';

  for(let num = 1 ; num <= 20 ; num++){
    if(num % inp == 0){
      /* console.log(shape) */
      str += `${shape} `;
    }
    else{
      /* console.log(num);   */
      str += `${num} `;
    }    
    if(num === 10)str += "<br>";

  } 
  result.innerHTML = str;
}


function check14(){
  
  for(let row = 1 ; row < 4; row++){
    let str = ''
    for(num=1; num<=4; num++){
    str += `${num}`
    } 
    console.log(str);
    console.log("--------------------");
  }
}

function check15(){
  
  for(let row = 0 ; row < 4; row++){
    let str = ''
    for(num = 0 ; num < 5 ; num++){
    str += num + 1;
    } 
    console.log(str);
    console.log("--------------------");
  }
}


function check16(){
  
  for(let row = 0 ; row < 3; row++){
    let str = ''
    for(num = 6; num > 0 ; num--){
    str += num ;
    } 
    console.log(str);
    console.log("--------");
  }
}

function check17(){
  const input17 = document.getElementById("input17");
  const output17 = document.getElementById("output17");
  const multiple17 = document.getElementById("multiple17");
  const shape17 = document.getElementById("shape17");

  const input = Number(input17.value);
  const output = Number(output17.value);
  const multiple = Number(multiple17.value);
  const shape = shape17.value;

  let result = '';

  for(let row = 1 ; row <= input; row++){
    for(num = 1; num <= output ; num++){
      if(num % multiple == 0){
        /* console.log(shape) */
        result += `${shape} `;
      }
      else{
        /* console.log(num);   */
        result += `${num} `;
      }  
      
    } 
    
  }
  document.getElementById("result17").innerHTML = result;
}


function check18(){
  for(let row = 1 ; row <= 4; row++){
    let str = ''
    for(let num = 1; num <= row ; num++){
     str += num ;
    } 
    console.log(str);
  }
}


function check19(){
  for(let row = 1 ; row <= 4; row++){
    let str = ''
    for( num = 1; num <= row ; num++){
     str += '*' ;
    } 
    console.log(str);
  }
}

function check20(){
  for(let row = 5 ; row > 0 ; row--){
    let str = ''
    for( num = 1 ; num <= row ; num++){
     str += num ;
    } 
    console.log(str);
  }
}

function check21(){

  let count = 0;  // count를 위한 변수

  for(let num = 1; num <= 30 ; num++){
    if(num % 4 === 0){
      count++;
    }
  }
  alert(`count : ${count}`);
}


function check22(){
  const input22 = document.getElementById("input22");

  const input = Number(input22.value);

  let count = 0;


  for(let num = 1; num <=100 ; num++){
    if(num % input === 0){
      count++;
    }
  }
  alert(`count : ${count}`);
}

function check23(){
  let count = 1;
  for(let row = 1 ; row <= 3; row++){
    let result = '';
    for(let num = 1 ; num <= 4 ; num++){
      result += count;
      count++;
      // result += count++;
    }
    console.log(result);
  }
}

function check24(){
  
  let sum = 0; // 누적 변수
  let value;

  while((value = Number(prompt("숫자입력"))) !=0){
    sum += value;
  }
  alert(`합계 : ${sum}`);
}


function check25(){

  //메뉴 가격을 저장한 변수 선언
  const gimbab    = 4000;
  const ramen     = 4500;
  const donkkaseu = 9000;

  // 주문 갯수를 카운트
  let gimbabCount    = 0;
  let ramenCount     = 0;
  let donkkaseuCount = 0;

  // prompt 에 입력된 값을 저장할 변수
  let input; // undefined

  //input이 undefined이기 때문에 while문 첫 반복은 무조건 수행됨
  while(input !== null){//input이 null이 아니면 반복
    
    //prompt -> 확인 : 작성한 값 반환
    //prompt -> 취소 : null
    //       -> 취소 선택시 while문 다음 반복 수행 X
    input = prompt("메뉴 번호 입력");
    switch(input){
      case '1' : gimbabCount++; break;
      case '2' : ramenCount++ ; break;
      case '3' : donkkaseuCount++; break;
      case null : alert("주문완료!!!!!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요")
    }
  }//while end

  let html = ''; //화면에 출력될 html 코드를 저장할 변수

  if(gimbabCount > 0){
    html += `<li>김밥(${gimbabCount}개 : ${gimbab * gimbabCount}</li>`;
  }
  
  if(ramenCount > 0){
    html += `<li>라면(${ramenCount}개 : ${ramen * ramenCount}</li>`;
  }
  
  if(donkkaseuCount > 0){
    html += `<li>돈까스(${donkkaseuCount}개 : ${donkkaseu * donkkaseuCount}</li>`;
  }

  const sum = (gimbab * gimbabCount)
               + (ramen * ramenCount)
              + ( donkkaseu * donkkaseuCount);
  
  html += `<li> 합계 : ${sum}원</li>`

  document.getElementById("result25").innerHTML = html;
}