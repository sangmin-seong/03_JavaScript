function classTest(){
  /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
  */

  //class 가 cls-test인 요소를 모두 얻어와 
  //HTML Collection (유사배열) 형태로 얻어옴
  const divs = document.getElementsByClassName("cls-test");

  for(let i = 0; i < divs.length; i++){
    // 요소.innerText = "값";  // 요소 내용으로 "값" 대입
    // 요소.innerText;         // 요소 내용 얻어오기

    console.log(divs[i].innerText);

    divs[i].style.backgroundColor = divs[i].innerText;
  }
}

/** input에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2(){
  /* input 요소에 입력된 갑 얻어오는 방법
      -> input요소.value  
     HTML 요소에서 얻어온 값의 자료형은
      -> 모두 string(문자열)
     합계 구하는 방법
      -> let sum = 0; 선언 후 누적

     HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
      -> document.getElementsByClassName("class 속성값")
        -> HTMLCollection(유사배열) 형태로 반환
  */

 const divs = document.getElementsByClassName("cls-test2");
 
 let sum = 0;
 
  for(let i = 0; i < divs.length; i++){
    const value = Number(divs[i].value);
    sum += value;
  }
  alert(`합계 : ${sum}`);

}

/**태그명으로 요소 접근하기 */
function tagNameTest(){
  /* document.getElementsByTagName("태그명"); */
  const tagList = document.getElementsByTagName("li");
  // -> 요소 4개 짜리 배열 반환

  for(let i = 0; i < tagList.length; i++){
    //tagList[i].innerText : 작성된 내용 

    tagList[i].style.color = tagList[i].innerText;

    // 테두리변경
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }
}

function nameTest(){
  // documnet.getElementsByName("name 속성값");
  //  -> NodeList (유사 배열) 반환

  //name 속성값이 "hobby"인 요소를 모두 얻어와 저장
  const hobbyList = document.getElementsByName("hobby");

  let str = ''; //check된 input의 value를 누적
  let count = 0; // chech된 input의 갯수를 카운트

  for( let i = 0; i < hobbyList.length ; i++){
    
    /* 요소.checked -> checkbox, radio 타입 전용 속성
    
      요소.checked = true; -> 해당요소 체크
      요소.checked = false; -> 해당요소 체크해제
      
      요소.checked ; -> 해당요소 체크여부 반환
                        (체크 O -> true; , 체크 X -> false;)
    */

    if(hobbyList[i].checked === true){
      // console.log(hobbyList[i].value);

      str += `${hobbyList[i].value} `
      count++;
    }
  }
  
  const div = document.getElementsByClassName("name-div")[0];
  
  div.innerHTML = `${str} <br><br> 선택된 취미 개수 : ${count}개`;
}


function cssTest1(){


  const container = document.querySelector('[target-div=css-div]')

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";
  

  const divs = document.querySelectorAll('[target-div=css-div]>div')

  for( let i=0; i<divs.length; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
    divs[i].style.alignItems = "center";
  }
  divs[0].style.backgroundColor = "pink";
  divs[1].style.backgroundColor = "skyblue";

  const test1 = document.querySelector('[target-div=css-div]>div')

  test1.style.fontSize = "30px";

}

