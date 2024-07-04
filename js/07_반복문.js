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