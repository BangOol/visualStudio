//practice.js

const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;
//함수표현식으로..

// for 문 종류
for(let i = 0; i<numbers.length; i++) {
  if(numbers[i] % 2 == 0)
  sum += numbers[i];
}

for(let number of numbers){
  if(number%2==0)
  sum += number;
}

let evenSum = (parameter) => {
  if(parameter % 2 == 0) {
    sum += parameter;
  } 
}


let oddSum = (parameter, idx) => {
  if(parameter%2 != 0){
    sum += parameter;
  }
}

numbers.forEach(oddSum);
console.log(sum);

// numbers.forEach(function (parameter, idx)  {
//   console.log(parameter, idx);
//   if(parameter % 2 == 0){
//     sum += parameter;
//   }
// });


numbers.forEach(evenSum); // numbers 배열에 대해, evenSum 함수를 이용하여 배열 짝수의 합을 구함
console.log('합: ' + sum);
