// object/practice2.js
// 달력만들기.
//<table><thead><th></th></thead>  <tbody></tbody></table>..
let year = 2022;
let month = 4;

showCalendar(2022,4);

function showCalendar(year, month){

let firstDay = getFirstDate(year, month); //1일의 위치지정하기 위한 함수
let lastDate = getLastDate(year, month); //해당월의 마지막날을 계산하기 위한 함수

function getLastDate(year, month){
  // 말일 정보를 가지고 오는 함수.
 //  Date.UTC(year, month, funcion.date())
//  let date = new Date();
//  let input = prompt('확인하고자 하는 달을 입력하세요.')
//  date.setMonth(input);
switch(month){
  case 4:
   return 30;
   case 5:
     return 31;
}
 }
 
 function getFirstDate(year, month){
   switch(month){
        case 4:
         return 5;
         case 5:
           return 0;
   }
 }

document.write(`<table border = 1><tr>`)
// let date = [Sun, Mon, Tue, Wed, Thr, Fri, Sat];
// for(let i = 0; i < 7; i++){
//   document.write(<>date[i]);
// }
for(let i = 0; i < firstDay; i++){
  document.write(`<td> </td>`); // 빈 공간 생성
}

// 날짜 화면 출력
for(let i = 1; i <= lastDate; i++){
  
  if((i + firstDay) % 7 == 0) { // 줄바꿈
    document.write(`<td>${i}</td>`);
    document.write(`</tr><tr>`)
  } else{
    document.write(`<td>${i}</td>`);
  }
  
}
document.write(`</tr></table>`)
// 빈 공간 작성.

}

