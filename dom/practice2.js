//dom/practice2.js

document.addEventListener('DOMContentLoaded', function () {

  let list = [{
    name: '홍길동',
    age: 20
  }, {
    name: '홍킬통',
    age: 55
  }, {
    name: '임꺽정',
    age: 17
  }];


  let div = document.createElement('div')

    
    let spanName = document.createElement('span');
    spanName.setAttribute('id', 'name');
    let listName = document.createTextNode('홍길동');

    let hypen = document.createTextNode(' - ');

    let spanAge = document.createElement('span');
    spanAge.setAttribute('class','age')
    let listAge = document.createTextNode(20);

    div.appendChild(listName);
    div.appendChild(hypen);
    div.appendChild(listAge);
    
  let divShow = document.getElementById('show').appendChild(div);

})