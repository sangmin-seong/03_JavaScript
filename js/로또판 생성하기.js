// 모든 id/class 값 가져오기
const lottoBtn = document.querySelector("#lottoBtn"); // 로또생성 버튼
const lottoPaper = document.querySelector(".lottoPaper") ; // 로또 용지


lottoBtn.addEventListener("click",()=>{
  lottoPaper.innerHTML = '';
  
  for( let i = 1; i < 46; i++){
    const number = document.createElement("div");
    number.classList.add("number"); // 클래스 추가
    number.textContent = i;  
    
    number.addEventListener("click", ()=> {
      
    })
    lottoPaper.append(number);
  }
  

 
})
