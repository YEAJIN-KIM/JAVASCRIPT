"use strict";

/* 논리 연산자 : 결과로 boolean ( 참 거짓 ) 
    > ( 초과 ) < ( 미만 ) >= ( 이상 ) <= ( 이하 )
    == ( 같다 ) != ( 다르다 ) */

let x = 10;
let y = 20;
console.log(x > y); // false ( boolean )

/* 결합 연산자 : 논리 연산자를 여러개 묶을 시 
    && ( and ) : A 와 B 모두 만족해야 true
    || ( or )  : A 와 B 둘중에 하나를 만족하면 true */

/* x 가  5 보다 크고 y 가 10 보다 작다 ? */
let a = x > 5 && y < 10;
console.log(a);

/* x 가 5 보다 크거나 y 가 10 보다 작다 ? */
let b = x > 5 || y < 10;

/* 놀이동산
    놀이기구를 타도 되는지 아닌지 check
    키 와 나이   */
let height = 180 ;
let age = 30 ;

/* 나이가 10살 이상이고, 키가 200 이 넘으면 탑승 가능 */
let ok = age >= 10 && height > 200 ;
console.log(ok);

/* 나이가 10살 이상이거나 키가 200이 넘으면 탑승 가능  */
/* 확률이 높은 것은 앞으로 배치하면 연산 횟수를 줄일 수 있음 */
let ok2 = age >= 10 || height > 200 ;
console.log(ok2);

/* 키가 200 초과면 탑승 불가
    서장훈 님이 입장하셨습니다  */
let sheight = 210;
let ok3 = !(sheight > 200);
console.log(ok3);

/* 삼항 연산자 
    조건식 ? true 값 : false 값  */
/* 나이가 10 살이 넘으면 welcome 아니면 go home */
let msg = age > 10 ? 'welcome' : 'go home';
console.log(msg);

/* test
    입장료 
    키가 200 이 넘거나 나이가 20이상이면 1000원 아니면 5000원 */
let price = height > 200 || age >= 20 ? 10000 : 5000 ;

/* 할인 
나이가 짝수면 2000원 아니면 500원 할인  */
let dc = age % 2 == 0 ? 2000 : 500 ; 

/* 총 요금  */
price = price - dc ;
console.log(price);

/* equlity 같다 */
let StringNum = '10';
let NumberNum = 10 ;

console.log(StringNum == NumberNum);  // value t
console.log(StringNum != NumberNum); //  value f

console.log(StringNum === NumberNum); // type f
console.log(StringNum !== NumberNum); // type t

console.log('--------object--------');

let me1 = { name : 'mr.Moon', age : 27 };
let me2 = { name : 'mr.Moon', age : 27 };
let me3 = me1 ;

console.log(me1 == me2); //false
console.log(me1 === me2); // false
console.log(me1 == me3); //true

/* 0 NULL empty String '' */
console.log(0 == false); //true
console.log(0 === false); //false

console.log('' == false); //true
console.log('' === false); //false

console.log(null == undefined); //true
console.log(null === undefined); //false