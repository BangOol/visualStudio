//array/basic.js

// 배열 선언 : [] or new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

// 추가: push: 마지막 위치, unshift: 첫 번째 위치
arr.push(5); // 배열 값을 마지막위치에 넣는 것.
arr.unshift(0); // 배열 값을 첫번째 위치에 넣는 것.

// 제거: pop(), shift()
arr.pop(); // 마지막 배열을 제거
arr.shift(); // 첫번째 배열을 제거

// 새로운 배열 생성 (forEach)
newAry.forEach((elem => {
  // arr.unshift(elem);//첫번째 배열부터 추가되는 배열의 마지막 값부터 들어감.
  arr.push(elem); //마지막 배열부터 추가되는 배열의 첫 번째 값부터 들어감.
}));


arr.pop(); //1,2,3,4,5
arr.shift(); //2,3,4,5


// splice(위치, 크기, 대체값) : 추가, 수정, 삭제
arr.splice(2, 3, 8, 9, 11); // 2번 째 인덱스 포함 3개의 인덱스의 값을 각각 8,9,11로 바꿈 - 수정
arr.splice(2, 0, 88) //2번 째 인덱스에 88이란 값 추가 - 추가
arr.splice(2, 3) // 대체값이 없을 때 포함되는 인덱스들이 삭제됨. - 삭제

newAry.forEach(elem => {
  arr.splice(1, 1, elem);

});

let names = [];
let anonym = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eum natus ea veniam pariatur voluptatibus dicta cum, nulla doloribus consequuntur adipisci saepe sint? Dignissimos consequatur nemo iusto beatae reprehenderit. Commodi.';
anonym.split(' ').forEach(elem => {
  names.push(elem);
})
console.log(names.toString()); // toString : 배열 사이에 ,가 들어감
console.log(names);
console.log(arr.toString()); // 배열은 문자열로 바꿔서 넣어야 함.


//forEach() : 반환 값 x
//map() : 각요소 -> mapping작업(다른 형태 반환)
//filter() : 조건 만족하는 값만 반환

let result = names.map(elem => {
  return elem.toUpperCase();
}); // 새로운 배열을 만들어 줌?

result = result.filter(elem => {
  return elem.length >= 10;
})

result = names //
  .map(elem => {
    let res = elem.toUpperCase()
    return res;
  }) //
  .filter(elem => elem.length >= 10); // ****chain rules
console.log(result);