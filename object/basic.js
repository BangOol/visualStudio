//object/basic.js



const member = {
  memberId : 'user1',
  memberName : 'Hong',
  getMemberName : function(){
    return `회원이름은  ${this.memberName}`;
  },
  setMemberName : function(name){
    this.memberName = name;
  }
}


const examMember = {
  exMemberIDd : 'user1',
  exMemberName : 'Hong',
  exSetMemberName : (name) => {
    this.exSetMemberName = name; // 이렇게 매개변수가 위의 변수를 의미한다고 얘기하는 건가?

  exGetMemberName : () => {
    return `회원이름은 ${this.exMemberName}`
    }
  }
}
console.log(member.memberId);
console.log(examMember.exMemberIDd);
console.log(examMember.exMemberName);
member.setMemberName('Hwang'); // 중간에 이렇게 이름 바꿀 수도 있다.
console.log(member.getMemberName()); // 함수형으로 정의했기에 함수 적어야함?

member.memberAge = 20; // member에 새로운 속성 추가 + 없을 때 이렇게 만들 수 있는 듯.
delete member.memberAge; // member에 memberAge 속성 삭제

member['memberPoint'] = 1000;
member.grade = function(){
  if(this.memberPoint < 1000){
    return 'gold'
  } else if(this.memberPoint >= 1000){
    return 'platinum'
  }
}

console.log(member.grade());

//클래스, Construct 함수, => object 생성.
class Student {
  constructor(sno,sname){
    this.sno = sno;
    this.sname = sname;
  }

  set mathScore(score){
    this._mathScore = score; // 생성자에 선언되지 않은 속성 추가
  }

  get mathScore(){
    return this._mathScore; // _mathScore 속성값을 읽어오겠음.
  }
  getSno(){
    return this.sno;
  }
  setSno(){
    this.sno = sno; //this.sno에 매개변수로 들어온 sno 값을 담겠다.
  }
}

const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
s1.engScore = 80;
s1.mathScore = 90;
console.log('학생번호: ' + s1.getSno()); 
console.log('영어점수: ' + s1.engScore);
console.log('수학점수: ' + s1.mathScore)

function Person(ssn, sname){
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function(){
    return `주민번호 ${this.ssn}, 이름${this.sname}`;
  }
}

const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('971111-1231241', 'Hwang');
const p3 = new Person('991111-1112411', 'park');
console.log(p1.getInfo());