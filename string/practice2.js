//string/practice2.js

let sso = ['970101-2234667','970101 1234537', '9701011234567', '971101/1234567']

function checkGender(ssn){ // 남자인지 여자인지 구별하는 함수 생성
  let findGenderNum =  ssn.replace(/\W/, '').charAt(6)
  if(findGenderNum == 1 | findGenderNum == 3)
    return '남자'
    else if(findGenderNum == 2 | findGenderNum == 4)
    return '여자'
}

console.log(checkGender('970102-2234567'))

sso.forEach(el => {
  let result = checkGender(el);
  console.log(result);
})