//dom/practice1.js

document.addEventListener('DOMContentLoaded', function () {
  let menus = [아이스아메리카노, 카페라떼, 레몬에이드]

  let ulTag = document.createElement('ul');

  menus.forEach(menu =>{
    let newList = document.createElement('li');
    newList.innerHTML = menu;
    //하위요소 추가
    ulTag.appendChild(newList);
  })
  let divshow = document.getElementById('show');
  div.appendChild(ulTag);
})