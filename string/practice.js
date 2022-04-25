//string/practice.js

let str1 ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quos tenetur quidem optio. Sint reprehenderit libero repudiandae nemo sit dolore facere iure molestiae quisquam assumenda amet porro, aut ipsum sequi!';

// 단어의 길이가 10개 이상인 값을 골라내어(consectetur...)
// console에 출력

//console.log('hello'.length);

result = str1;
result = result.split(' ').filter((val) => val.length >= 10).join(', ');
console.log(result);

