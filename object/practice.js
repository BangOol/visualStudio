//object.practice.js
// mockaroo
const jsonObj = 
`[{"id":"Fixflex","first_name":"Regan","last_name":"Dillimore","email":"rdillimore0@cyberchimps.com","gender":"Female","ip_address":"75.82.0.197"},
{"id":"Ventosanzap","first_name":"Alair","last_name":"Pargent","email":"apargent1@google.de","gender":"Male","ip_address":"74.199.201.30"},
{"id":"Fintone","first_name":"Alfonse","last_name":"Cahalan","email":"acahalan2@mapquest.com","gender":"Male","ip_address":"235.192.116.43"},
{"id":"Toughjoyfax","first_name":"Madel","last_name":"Duffree","email":"mduffree3@icq.com","gender":"Female","ip_address":"47.175.239.237"},
{"id":"Kanlam","first_name":"Guthrey","last_name":"Kalvin","email":"gkalvin4@state.tx.us","gender":"Male","ip_address":"218.52.16.204"},
{"id":"Prodder","first_name":"Lenna","last_name":"Wand","email":"lwand5@psu.edu","gender":"Female","ip_address":"201.241.175.48"},
{"id":"Sonsing","first_name":"Jaine","last_name":"Farr","email":"jfarr6@mtv.com","gender":"Female","ip_address":"104.33.137.172"},
{"id":"Hatity","first_name":"Dante","last_name":"Lattey","email":"dlattey7@yolasite.com","gender":"Male","ip_address":"62.78.48.8"},
{"id":"Hatity","first_name":"Perceval","last_name":"Glanders","email":"pglanders8@etsy.com","gender":"Male","ip_address":"224.22.87.229"},
{"id":"Zaam-Dox","first_name":"Antonina","last_name":"Bamsey","email":"abamsey9@bizjournals.com","gender":"Genderqueer","ip_address":"117.190.108.135"},
{"id":"Bigtax","first_name":"Alley","last_name":"Seward","email":"asewarda@sitemeter.com","gender":"Male","ip_address":"136.241.76.207"},
{"id":"Job","first_name":"Crawford","last_name":"Dewane","email":"cdewaneb@google.com.hk","gender":"Male","ip_address":"130.62.29.209"},
{"id":"Bamity","first_name":"Yorgos","last_name":"Lavery","email":"ylaveryc@imdb.com","gender":"Male","ip_address":"93.129.172.20"},
{"id":"Transcof","first_name":"Shelba","last_name":"Dufour","email":"sdufourd@forbes.com","gender":"Female","ip_address":"184.239.120.83"},
{"id":"Cookley","first_name":"Quinlan","last_name":"Gandrich","email":"qgandriche@hexun.com","gender":"Male","ip_address":"127.183.85.97"}]`;



// json 문자열 -> javascript 오브젝트 변경.
// 생성자, 클래스 등으로 데이터를 넣기보다는 JSON 방식으로 데이터를 주로 가져온다.

const objAry =  JSON.parse(jsonObj);
// console.log(objAry); // id:? , first_name: ? ....

let fields = ['id', 'first_name', 'last_name', 'email'];
function showTable(objAry){ // 밖의 objAry와 전혀 다른 변수
  let tableTag = ""; 
  // 매개변수 objAry를 활용하여 테이블 형식으로 페이지를 만드는 것.
  // <table>
  //</table>
  tableTag +=`<table>`;
  tableTag += createHead();
  tableTag += createBody(objAry);
  tableTag += `</table>`;

  document.write(tableTag);
}

function createHead(){
  //<thead><tr><th>*항목갯수</tr></thead>
  let headTag = "";
  headTag += '<thead><tr>';
  fields.forEach((val) => {
    headTag +=`<th>${val}</th>`
  });
  headTag += '</thead></tr>';
  return headTag;
}
function createBody(objAry){
  //<tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  let bodyTag = "";
  bodyTag +=`<tbody>`;
  objAry.forEach((val, idx) => {
    bodyTag += `<tr>`;
    fields.forEach((field) => {
      bodyTag += `<td>${val[field]}</td>`;
    });
    bodyTag += `</tr>`;
  });
  bodyTag += `</tbody>`;
    return bodyTag;
}
showTable(objAry);