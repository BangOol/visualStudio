// string/basic.js
// 1. 문자열 vs 문자열 객체

// 문자열 - 기본 타입
let str1 ='문자열';
console.log(typeof str1);
console.log(str1);

// 문자열 객체 - 참조 타입 -- 객체
let str2 = new String('문자열');
console.log(typeof str2);


console.log(str1 == str2); // 1-2)비교  연산자 == true(in javascript) -> 값을 비교
console.log(str1 === str2); // 비교연산자 === 값 & 타입을 비교


let result = str1.substring(0,2); // 1-3)index: 0 ~ index :2 (0번 째 인덱스의 글자를 몇 개 가져오겠다?)
console.log(result);
result = str2.substr(0,2); // index: 0, 크기2 잘라내기 
console.log(result);



const cal1 = '1 + 2 * 3'; // 1-4)String 타입
const cal2 = new String('1 + 2 * 3'); // object 타입

// eval() : 문자열 -> 수식으로 변경해주는 메소드
console.log(eval(cal1)); // String 타입을 수식이 가능하게 만들어줌.
console.log(eval(cal2)); // object 타입 그대로 표현 --> String 타입으로 바꾸어주어야 함.
console.log(eval(cal2.valueOf())); // object 안 값을 기본 타입으로 반환함.

// 1-5)trim() : 좌우 여백을 잘라내는 메소드
console.log(' 문자열 공백 테스트 '.trim()); //양쪽의 공백을 제거함.
console.log(' 문자열 공백 테스트 '.trimStart().trimEnd()) // trimStart()와 trimEnd()로 선택 가능

// 1-6)문자열의 공백을 제거.
result = ' 문자열 공백 테스트 '.split(' '); // 매개변수의 값을 기준으로 문자를 잘라내서 배열 형태로 반환
result = result.filter(function(val){ // filter는 1-7과 더욱 연관있을 듯.
 return val; // ['' '문자 열', '공백', '테스트', '']
}); // 어떠한 함수가 매개변수로 들어오고, 조건을 만족한 값이 true일 때, 그 값을 반환하여 배열을 만든다.


console.log(result.join(' '));
// * join 메소드 : 배열 타입을 문자열 타입으로 변환.
// 매개변수 값을 기준으로 배열을 이어줌.

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',') 
// 공백 기준 문자를 배열에 담음 -> ? -> 조건이 맞는 배열들을 ,를 기준으로 연결하여 문자열로 변환
console.log(result)



// 1-7) 자바스크르비트 boolean 값: null, '', , undefined 는 모두 false를 반환한다.
//
if(!null){
  console.log('false');
}

// slice, substring, substr(Deprecated) (문자열을 잘라내는 메소드)
console.log('안녕하세요 반갑습니다.'.slice(0, 5)); // 인덱스 값 기준 : 0~ 5까지 잘라내겠다는 의미. 
console.log('안녕하세요 반갑습니다.'.slice(0, -6)); // -를 사용할 때는 -1부터 카운트하는게 맞는 듯 하다.
console.log('안녕하세요 반갑습니다.'.substring(0,6));  // -값을 받아들이지 않음.
console.log('안녕하세요 반갑습니다.'.substr(2,3)); // index 2 부터 3개의 문자를 잘라옴.


//1-9) toString() : 문자열로 반환
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1); // String 타입으로 변환시켜주는 메소드
true.toString(); // 'true'
let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj);
console.log(obj.toString()); // object 타입은 문자열로 변환이 되지 않는다.
console.log(obj.key.toString()); // 단 object 안 한 요소를 특정하여 toString을 했을 때는 가능하다.

