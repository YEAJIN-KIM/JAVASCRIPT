"use strict";

/* 대입 엽산자 : = ( 오른 쪽 값을 왼쪽에 담는다 ) 
    == ( 같음 ) or === ( type 같음 ) */
let a = 1 ;
let b = '1';
let c = a + b ;

console.log(a);
console.log(b);
console.log(c);
console.log(typeof c);

console.log(a + b); // num + str = str
console.log(a / b); // num / str = num

let temp = a/b;
console.log(typeof temp);
console.log(a == b );
console.log(a === b ); // type 을 확인하여 비교함 

console.log('=====================');

/* 산술 연산자 : + - * / % */
let x = 5;
let y = 2;

let add = x + y ;
let sub = x - y ;
let div = x / y ;
let max = x * y ;
let rem = x % y ;

console.log(add);
console.log(sub);
console.log(div);
console.log(max);
console.log(rem);

/* 복합 연산자 : += -= *= /= %= */
x = x + 1 ;
console.log(x);

x += 1 ; // x = x + 1 ;
console.log(x);

x -= 1 ; 
console.log(x);

x *= 2 ; 
console.log(x);

x /= 2 ; 
console.log(x);

x %= 2 ; 
console.log(x);

console.log('=====================');

/* 전위 후위 연산자 ++ -- */
x += 1;
console.log(x);

x ++ ; // + 1
console.log(x);

-- x ; // -1
console.log(x);

console.log('=====================');

let x2 = 1;
let y2 = x2++;

console.log(x2);
console.log(y2); //1

let x3 = 1;
let y3 = ++x3;

console.log(x3);
console.log(y3); //2