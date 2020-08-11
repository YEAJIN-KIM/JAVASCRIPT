"use strict";

console.log("hi");

/* 
    유용한 단축키 
    코드 이동 : alt + 방향키 
    코드 복사 : ctrl + c
    코드 삭제 : ctrl + shift + k ( row )
*/

/*
    변수 : 변할 수 있는 수 ( 상황이나 값 )
    01 program 진행 중 발생하는 data 임시 저장하기 위해 
    02 중복 값을 제어하기 위해 

    = data 를 담는 상자 
    = data 는 수정이 가능함
*/

/* 
    01. 변수 만들기 
    키워드 ( 상자 ) 변수명 ( 상자이름 );

    02. 값 넣기 
    변수 명 = 넣을 값;

    03. data type 
    number string boolean null undefied
    object function 
*/

/* number ( 숫자 : 정수, 실수 ) */ 

var a = 1;
var b = 2;
var c = 1.5;

console.log(a);
console.log(c);
console.log(typeof c);
console.log(a+b);
console.log('====================');

/* let, const 값 재할당 불가 */
/* var 사용하지 않고 대체하여 사용 */
let ages;
ages = 30;
console.log(ages);

{ /* block 내는 지역 변수 */
    const age2 = 40;  //stero type 변경하지 못하도록 지정 
    console.log(age2);
}

/* var 을 사용할 수 없는 이유 */
/* 01. gloval scope (hoisting) */ 
WhyDoNotUse = 111111111;
var WhyDoNotUse;
console.log(WhyDoNotUse);

/* 02 block 무시 */
{
    var WhyDoNotUse2 = 123;
    console.log(WhyDoNotUse2);
}
console.log(WhyDoNotUse2);

/* 변수명 제한
    js 예약어 x
    숫자로 시작 x 
    소문자로 시작 o ( 상수는 전부 다 대문자 )
    띄어쓰기 대신 낙타체 또는 _ ( WhyDoNotUse)*/

console.log('================');

let age;
age = 25;

let height;
height = 158;

console.log(age);
console.log(height);
