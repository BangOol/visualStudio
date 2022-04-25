//dom/basic.js

//DOM : 생성, 속성 변경, 삭제처리, 부모-자식 관계 설정
// addEventListener('이벤트이름', '실행할 코드=핸들러')
document.addEventListener('DOMContentLoaded', function(){ //이벤트 리스너는 DOM 객체에서 이벤트가 발생할 경우 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트
  let h3Tag = document.getElementsByTagName('h3')
  console.log(h3Tag);
  // h3Tag[1].innerHTML = 'content changed.'

    // let first = document.getElementById('first'); // element를 가져옴.?
    // console.log(first)
    // first.innerHTML = 'Git changed';

    // let second = document.getElementsByClassName('first');
    // second[0].innerHTML = '사과';

    //css 선택자
    let list = document.querySelectorAll('ul>li');  
    console.log(list);
    list[0].style.backgroundColor = 'yellow';
    
    //DOM 생성

    let newList = document.createElement('li') // <li>Mango</li> 태그 생성
    newList.innerHTML = 'Mango';

    console.log(newList);

    //ul 하위요소
    let ulTag = document.querySelector('ul');
    ulTag.appendChild(newList)// 자식요소로 뭐라는거지

}); // 
// index.html에서 읽어오고 여기 js파일로 들어왔을 때, 아직 h3를 아직 인식못한 상태이기 때문에 그값을 읽지 못했음.
// 위치를 h3 밑에서 해야 함.