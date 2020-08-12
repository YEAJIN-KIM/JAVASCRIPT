"use strict";

/* 조건문
    if(condition) {
        만족시 실행되는 범위
    } else {
        아닐시 실행되는 범위 ( 조건 외 )
    }*/

if (true) {
    console.log('true');        
} else {
    console.log('false');
}

/* if 다중 if 문  */
let a = 3 ;

if (a % 2 == 0) {
    console.log(a + "는 짝수");
    confirm.log(a + "는 2의 배수");   
}

if (a % 3 == 0) {
    console.log(a + "는 홀수");
    console.log(a + "는 3의 배수");   
} 

if (a % 4 == 0) {
    console.log(a + "는 홀수");
    console.log(a + "는 4의 배수");   
} 

console.log('----------------------');

/* if elseif ( 여러 옶션 중 하나만 )
    if(condition) {
        만족시 실행되는 범위
    } elseif {
        
    }*/

/* 키가 150 이상이면 welcome
    130 <= 150 이면 welcome friend
    100 <= 130 이면 welcome boy
    나머지는 ?? */

let height = 145;

if (height >= 150) {
    console.log("welcome"); 
} else if (height >= 130) {
    console.log("welcome friend"); 
} else if (height >= 100) {
    console.log("welcome boy"); 
} else {
    console.log("??"); 
}

console.log('----------------------');

/* x 는 5배수
    x 는 2배수
    x 는 4 배수
    5 2 4 배수 해당 없음 */

let x = 4 ;

if ( x % 5 == 0) {
    console.log(x + "는 5의 배수"); 
} else if ( x % 4 == 0) {
     console.log(x + "는 4의 배수"); 
} else if ( x % 2 == 0) {
    console.log(x + "는 2의 배수"); 
} else {
    console.log("해당 없음"); 
}

console.log('----------------------');

if ( x % 5 == 0) {
    console.log(x + "는 5의 배수"); 
} if ( x % 2 == 0) {
    console.log(x + "는 2의 배수"); 
} if ( x % 4 == 0) {
    console.log(x + "는 4의 배수"); 
}

console.log('----------------------');

let b = 3;

if ( b % 3 == 0) {
    console.log('3 배수');
    if ( b % 4 == 0) {
    } else  {
    console.log('3 배수이나 4 배수는 해당 X');
    }
} else {
    console.log("4 배수이나 실행 X");
}

console.log('----------------------');

/* test
    id 틀리면 'id error'
    pw 틀리면 'pw error' */

let id = '802400'
let pw = '1234'

if (id == '802400') {
    if (pw == '1234') {    
        console.log('login 성공');    
    } else {
        console.log('pw error');
    } 
} else {
    console.log('id error');
}

console.log('----------------------');