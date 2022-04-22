//practice2.js
//object의 경우 그 값들을 가지고 있는 것이 아니라, 그 값들이 저장되어있는 주소값을 가지고 있음.
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

const persons = [person3, person4, person5];// 자바에서 배열을 의미하는 {}는 자바스크립트에서 object를 의미한다.
let sum = 0;
let avgAge = 0;
for(let person of persons){
  sum += person.age;
}
console.clear();

let avgAgeFnc = function(val){
  sum += val.age;
};
let avgHeightFnc = function(val){
  sum += val.height;
}

sum = 0;
persons.forEach(avgAgeFnc);
 avgAge = sum / persons.length;
 console.log(`평균나이:  ${avgAge}`)

 persons.forEach(function(val) { //persons의 개수만큼 돌리는게 foreach
  sum += val.age;
 });



 let tag = "";
 // 이름, 나이, 키 출력
 let allPerson = (val, idx) => {
  if(idx == 0){
    tag += `<ul>`;
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height}`;
  
  if(idx == persons.length-1){
    tag += `</ul>`;
  }
 }

 persons.forEach(function(val, idx){
  if(idx == 0){
    tag += `<ul>`;
  }
  if(val.height >= 170)
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  
  if(idx == persons.length-1){
    tag += `</ul>`;
  }
  
 });
 console.log(tag);
 document.write(tag);