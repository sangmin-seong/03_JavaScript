/* DOM 요소 생성. 추가. 제거 */

// 기준이 되는 박스
const standard = document.querySelector("#standard");
// 버튼 5개
const btns = document.querySelectorAll(".btn");

let count = 1; // 1씩 증가하면서 요소 내용으로 추가

for( let i = 0; i < btns.length; i++){

  //모든 버튼에 클릭 이벤트 추가
  btns[i].addEventListener("click", () => {
    
    const str = btns[i].innerText; // 작성된 버튼 내용
    //console.log(str);

    switch(str){
      case "prepend" : 
        const span1 = document.createElement("span"); // span 생성
        span1.innerText = count; // span내용으로 count를 추가
        span1.style.backgroundColor = "skyblue";
        standard.prepend(span1); // #standard 첫번째 자식으로 span1을 추가
      break;
      
      case "append" :
        const span2 = document.createElement("span");
        span2.innerText = count;
        span2.style.backgroundColor = "orange";
        standard.append(span2); // #standard 마지막 자식으로 span2를 추가
      break;
      
      case "before" :
        const div1 = document.createElement("div");
        div1.innerText = count;
        div1.style.backgroundColor = "grey";
        div1.className = "box"; // box 클래스 추가
        standard.before(div1); // #standard 앞쪽에 추가
      break;

      case "after" :
        const div2 = document.createElement("div");
        div2.innerText = count;
        div2.style.backgroundColor = "greenyellow"
        div2.className = "box"; // box 클래스 추가
        standard.after(div2); // #standard 앞쪽에 추가
      break;

      case "remove" : 
        //.container 요소를 제거
        document.querySelector(".container").remove();
      break;
    }
    count++; //count 1증가
  });
}
