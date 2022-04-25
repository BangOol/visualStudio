// string/baisc2.js

//indexOf(), lastIndexOf() : 찾을 문자열의 위치 인덱스 return
let result = '안녕하세요 홍길동입니다.'.indexOf('홍길동');
result = '예제입니다'.indexOf('홍길');
result = '홍길동, 홍킬동, 홍길도'.lastIndexOf('홍길도');
result = '홍길동, 홍킬동,홍길도, 홍ㄱㄷ, ...'.lastIndexOf('홍', 10); // 홍이라는 단어를 10번째부터 찾겠다.

let str1 = '홍길동, 청도의 홍킬동,부산의 홍길동, 홍ㄱㄷ, ...'
let position = str1.indexOf('부산'); //부산의 위치 인덱스.
result = str1.indexOf('홍길동', position);


let str2 = str1.charAt(result); // charAt(인덱스): 인덱스값을 넣을 때, 해당되는 위치의 값을 반환
  console.log(result);  // 찾는 값이 없을 때 -1를 반환
// 첫번째로 찾은 단어의 인덱스 값을 처음 기준으로 반환


//toLowerCase(), toUpperCase() : 문자 변경
let str3 = 'Hello';
console.log(str3.toUpperCase().toLowerCase());

// includes('찾을 문자열') : true / false 반환
console.log(str3.toLowerCase().includes('he'));

// search('찾을 문자열') *추가기능: search(정규표현식); 찾을 문자열의 인덱스를 반환
console.log(str3.toLowerCase().search('he')); // 문자열 값 반환 시 indexOf()와 같다. + 소문자/대문자 구별함.


// 정규표현식 오브젝트 /(new RegExp()) <-- 이런 식으로 잘 안 씀. (i ,g, m)
result = str3.search(/he/ig);
console.log(result);

// match('찾는 문자열') : 문자열 or null 반환.
let str4 = 'bad MORNING, goodmorning, GOOD AFTERNON, good evening, and good night';
// result = str4.match('good')
// 정규 표현식 나중에 찾아보자.
result = str4.match(/good\s\w+/gi) // g: global option
console.log(result); // 값이 존재할 때 문자열의 인덱스 값과 문자열 전체를 반환하며(g,m,i 쓰지 않았을 경우), 없을 경우 null을 반환함.
// 공백을 의미하는 \s를 사용 시 출력에서 공백으로 출력됨.
// \w: 뒤의 문장 중 첫번째 단어를 같이 출력
// \w+ : 뒤의 문장들을 출력해줌.
//\s\w+를 덧붙였을 때, goodmorning은 공백이 존재하지 않기 때문에 출력문에 나타나지 않는다.


//replace('찾을 문자열', '바꿀 문자열')
result = str4.replace('good','better')
result = str4.replace(/good/ig, 'better') // 모든 good을 better로 바꿈
result = str4.replace(/\s/ig, '-') // 공백을 -로 바꿈
//W : 문자 이외의 값.
//w : 문자 값
result = str4.replace(/\W/ig, '-')
console.log(result);

result = 'morning1 morning2 morning123'.replace(/\d/g,'') // 모든 숫자를 지우는 방법
result = 'morning1 morning2 morning123'.replace(/\D/g,'') // 숫자 이외 값을 지우는 방법
console.log(result);
// d : 정수를 찾음
// D : 정수 이외 값을 찾음
// replace만을 썼을 때, 첫번째로 만나는 문자열만을 바꾸게 된다.

let sso = ['970101-1234667','970101 1234537', '9701011234567', '971101/1234567']
result = sso.forEach(num => console.log(num.replace(/\D/g, '')));

// 문자열 합치기: +, concat()
console.log('hello' + 'world');
console.log('hello'.concat('world','!!', ' welcome'));