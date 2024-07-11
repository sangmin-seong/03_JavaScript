/* 계산하기 */
const calc = document.querySelector("#calc");

calc.addEventListener("click", () => {
  
  // 추가 버튼을 통해 input이 추가 될 수 있으므로 "클릭 시" 함수 내에 input 값을 가져와야함.
  //계산 시점에 있는 모든 .input-number 얻어오기
  const numbers = document.querySelectorAll(".input-number");
  
  let sum = 0;

  for( let i = 0; i < numbers.length; i++){
    sum += Number(numbers[i].value);
  }
  alert(`합계 : ${sum}`);
})

/* 추가버튼 클릭 시 행 추가하기 */
const addBtn = document.querySelector("#add"); // 버튼
const container = document.querySelector(".container"); //감싸는 요소

addBtn.addEventListener("click", () => {

  // 추가 버튼 클릭 시 
  // div, input, span 요소를 생성해서 알맞게 조립 후
  // .container의 마지막 자식으로 추가

  // 1) div 만들기
  const div = document.createElement("div");
  div.className = "row";

  // 2) input 만들기
  const input = document.createElement("input");
  input.type = "text";
  input.className = "input-number";

  // 3) span 만들기
  const span = document.createElement("span");
  span.className = "remove-row";
  span.innerHTML = "&times;";

  // ********************************************
  // X버튼(span)이 만들어질 때, 클릭되었을 때 동작을 같이 정의해줌!!!!!!!!

  span.addEventListener("click", () => {

    // 클릭된 X버튼의 부모(div.row)를 제거
    span.parentElement.remove();
  })

  // ********************************************

  //4) 알맞게 조립
  // 요소.append(A, B, C ....) == 마지막 자식으로 추가
  div.append(input, span);

  // 5) 조립된 div를 .container의 마지막 자식으로 추가
  container.append(div);
})




// 페이지 로딩 시점에 존재하는 .remove-row를 모두 얻어오기
// -> 처음에 x버튼이 없어서 아래 for문 실행 X

// const xBtns = document.querySelectorAll(".remove-row");

// for(let i=0 ; i < xBtns.length ; i++){
//   xBtns[i].addEventListener("click", ()=>{
//     console.log("x클릭됨")
//   })
// }
