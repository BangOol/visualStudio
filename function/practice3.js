//practice3.js

const person3 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}

const person4 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}


const person5 = {
  fullName: 'park',
  age: 25,
  height: 180.4
}

const persons = [person3, person4, person5];

const newPersons = persons.map(function(val, idx){
  let newObj = {}; // 오브젝트 타입 선언
  newObj.index = idx + 1; // 오브젝트 속성(필드) 추가
  newObj.fName = val.fullName;//안에서 오브젝트 생성 후, 변수를 추가한 뒤 return 가능
  newObj.age = val.age;
  newObj.height = val.height;
  return newObj; // 이런 식으로 우리가 원하는 결과를 만들어 낼 수 있다?
  // 아무것도 return을 하지 않을 시, undefined를 return하게 됨.
});

console.log(newPersons);

function tableList(personAry){
  document.write(`<table border = 1px>`);
  document.write(`<tr><th>순번</th>
                  <th>이름</th>
                  <th>나이</th>
                  <th>키</th><tr>`);
  for(let person of personAry){ // line 생성
    document.write(`<tr>`);
    for(let field in person){ // 칼럼생성

      document.write(`<td>${person[field]}</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
// 함수 실행
tableList(newPersons);

