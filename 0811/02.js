"use strict";

/* string ( 문자열 )  : '' or "" */
let hello = 'hello ';
let hi = 'How Are You ? ';
let bye = 'bye ';

console.log(hello); 
console.log(hi);
console.log(bye);
console.log(hello + hi + bye );

console.log(hi.length); /* length */
console.log(hi.charAt(5)); /* index 0 */
console.log(bye.toUpperCase());
console.log(hello.indexOf('e'));
console.log(hello.lastIndexOf('l'));

console.log('=====================');

/* boolean ( true false )*/
/* true : "", '', null, 0 , undefined, NaN ( = net a number)
   false: 1, other */

let t = true;
let f = false;
console.log(typeof t);

let cond = 5 > 3;
console.log(typeof cond);
console.log(cond);

let myName = '예진';
let myAge = 25;

console.log('이름 : ' + myName + '\n나이 : ' + myAge ); /* /n line */
function call () {
    document.write('이름 : ' + myName + '<br>나이 : ' + myAge ) ;
}

/* button 누를 시  phone 정보 출력 
    모델명: 
    제조사:
    화면 사이즈 :
    가격:
    재고: */

let phname = 'iphone 11';
let made = 'apple';
let size = '11 inch';
let price = 1000;
let stock = true;

console.log(`
            모델명 : ${phname} 
            제조사 : ${made} 
            화면 사이즈 : ${size} 
            가격 : ${price}
            재고 : ${stock} `);

function phone () {
    document.write('모델명 : ' + phname
                     +'<br>제조사 : ' + made 
                     +'<br>화면 사이즈: ' + size 
                     +'<br>가격 : ' + price 
                     +'<br>재고 : '+ stock );
}

/* js : dynamic typing language */
console.log(typeof myName);
console.log('name : '+ myName);
myName = 5;
console.log(typeof myName);
myName = 10 + '00'; //숫자 + 문자 = string */
console.log('name : '+ myName);

let myAge2 = myAge + "" ; /* 형 변환 ( type 변화 ) */
let myAge3 = myAge2 * 1 ;
console.log(typeof myAge3);
console.log('=====================');

/* object - json */
let me = { name: '일쭈', age : 27 };
console.log(me);
me.name = '일꼬몽';
console.log(me.name);

me = { height : 173 , weight : 60 };
console.log(me);

 

let me2 = { name: '예지니', age : 25 };
console.log(me2.name);
me2.name = '찔빱이';
console.log(me2.name);

/* memory (ram)
    static 
    stack : me me2
    heap : 내가 생성한 객체 #10 me
    
    stack = 복사본 ( 바로가기 )
    heap =  참조 
    바로가기와 참조의 관계로 바로가기를 수정해도 해당 사항이 반영됨 */