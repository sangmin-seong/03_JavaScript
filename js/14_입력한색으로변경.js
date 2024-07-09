
/* 화면에 존재하는 .box, .color-input 얻어와 변수에 저장 */
const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

/* 클릭할 버튼 요소 얻어오기 */
const changeBtn = document.querySelector("#changeButton");




/* 변경버튼 클릭 시 */
changeBtn.addEventListener("click",function(){
  /* 체크된 radio 버튼을 찾아 얻어오는 코드를 addEventListener 안에 작성하는 이유
  
     - 밖에 작성시 페이지 로딩 시점에 check된 요소가 없어 작동하지 않음
     -> 안에 작성시 changeBtn 버튼을 click한 시점으로 변경되어 check가 있거나 없음을 인식, null 혹은 value가
        나타나게 됨.
        ex) 배달앱을 켜지 않은 상태에서 가게와 메뉴를 찾을 수 없음.
  */
  // 상태 선택자 : checked -> 체크된 요소를 선택  
  const checkBtn = document.querySelector("[name=opacity-btn]:checked");
  // 선택 안되면 null 반환
  let op;
  if(checkBtn == null) op = 1; // 체크 안되어 있으면 1
  else                 op = checkBtn.value;
  
  for(let i = 0; i < boxList.length; i++){
    //input에 작성된 값을 얻어와서 같은 index번째 box요소에 배경색으로 대입
    boxList[i].style.backgroundColor = inputList[i].value;


    // 투명도 적용
    boxList[i].style.opacity = op;
  }
})

/* 
  input 관련 요소에 작성된 "값" : value
  
  나머지 요소(div, p, span ....)에 작성된 "내용"
  -> innerText, innerHTML
*/