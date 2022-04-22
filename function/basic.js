//function\basic.js
// class와 긴밀한 관계를 유지하는 게 function
// 1. 함수는 함수선언식으로 정의가능.
function sum(num1, num2){ // --> 이렇게 sum이라는 함수가 선언되어 있어서 후에 let sum으로 함수 못 담음.
  //안에서 let이나 var로 다시 선언해줄 필요가 없음.

  console.log(num1, num2);
  return num1 + num2;
  // 타입을 정해주지 않고 return해도 됨.
  // 안에서 따로 매개변수의 값을 선언해주지 않아도 됨.
  // -> let sum = functon(num1, num2) { }
}


//2. 이렇게 함수 표현식으로 정의가능.
let myfnc = function(val1, val2){
  var myVal = 10;
  return val1 + val2 + myVal;
}
 
let result = sum(10,20); // 이런식으로 매개변수값을 넣으면 자동으로 값이 나옴.
let result1 = sum(10,20,30); // 매개변수 3개로 잘못 입력해도 오류가 나지는 않음.
console.log('결과는 ' + result);
console.log('결과는 ' + result1);

console.log(typeof myfnc, myfnc);
result = myfnc(10,20);
console.log(result);


let mysum = myfnc;
result = mysum(20,30);
console.log(result);

const person = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}

const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}


const person2 = {
  fullName: 'park',
  age: 25,
  height: 180.4
}

let myinfo = function(obj){
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height} 입니다.`;
  return info;
}

result = myinfo(person);
console.log(result);

const persons = [person, person1, person2];
for(let person of persons){
  let result = myinfo(person);
  console.log(result);
} // 배열을 활용 및 출력

persons.forEach(function(person, idx){
  console.log('이름: ' + person.fullName + ' 나이: ' + person.age + ' 키: ' + person.height);
})

console.clear(); // console 위의 내용 지우는 것.
persons.forEach(function(val, ind, ary){ // 자바스크립트에서 문자열 ,숫자, boolean, 배열 --> 매개값으로 사용 가능
  // 함수를 매개변수로 사용가능.
  console.log(val, ind, ary);
  console.log(myinfo(val));
})


// let funcParam = function(val, ind, ary){
//   console.log(myinfo(val));
// }
// persons.forEach(funcParam); // 메소드의 매개값으로 활용되는 함수 --> 콜백함수

let funcParam = (val, ind, ary) => { //화살표 함수라고 부르기도 한다.
  console.log(myinfo(val));
}
persons.forEach(funcParam);