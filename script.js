// JavaScript로 키보드 키를 눌렀을 때 색상 변경 예제

// 모든 키 요소를 가져오기
const keys = document.querySelectorAll('.key');

// 각 키에 클릭 이벤트 리스너 추가
keys.forEach(key => {
  key.addEventListener('click', function() {
    // 클릭된 키의 클래스를 toggle하여 색상을 변경
    key.classList.toggle('key-pressed');
  });
});
