//string/basic3.js
//'hello',"hello", 'hello' -> 문자열.
let str1 = 'hello';
console.log(`${str1}`);

let str2 = `Welcome, 
to my home,
this is house`;
str2 = 'Welcome\nto my home, \n This is house \n' //  \n: 줄바꿈
console.log(str2); // 엔터를 사용해서 문자열 끊으면 `` 써야 되는 듯?

let age = 22;
console.log(`${age>=20? '성인' : '청소년'}`); // 간단한 표현식

