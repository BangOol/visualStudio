//array/basic1.js
//reduce(); map() => 새로운 배열, filter() => 새로운 배열형태로 반환
//reduce() => 결과값이 지정하는 값으로... ex) String, number, 배열 등

const numbers = [23,4,77,51,63,34,62,92];

// 배열요소 누적합.
let result = numbers.reduce(function(accum, elem, ind, ary){
  console.log(accum,elem,ind,ary);
   // 0+23 => 23, 23 + 4 => 27, 27 + 77 => 104...
  return accum += elem;
},0); // 초기값이 주어졌을 때 첫번째 누적값으로 이용 0 23 idx0 배열요소
      // 첫번째 두번째 값부터..? 


//배열요소의 *2 => 새로운 배열
result = numbers.reduce(accum,elem => {
  accum.push(elem*2); // 비어있는 배열[]에 *2 값 담기
  return accum;
}, []); //배열
console.log(result);


result = numbers.reduce(function(accum, elem){
  if(elem >=50){
    accum.push(elem);
  }
  return accum; // 반환값은 다음 순번의 초기값(accum);
});
console.log(result);
