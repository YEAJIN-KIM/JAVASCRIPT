"use strict";

/* for ( 처음 값 ; 조건; 증감;) {
    반복할 코드     
} */

let a;
a = 1 ;

/* while  */

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log(i); // i = 5

console.log('----------------------');

/* 1 부터 몇 까지 더해야 500이 넘을까 ?*/
let i2 = 0;
let sum = 0;

while (sum < 500) {    
    i2++; 
    sum += i2 
} 
console.log(i2);

console.log('----------------------');

/* 반복 횟수가 명확한 경우 직관적 */
for (let j = 0 ; j < 3 ; j++) {
    console.log('ㅋㅋㅋ');
    //alert(j);
}

/* */
for (let k = 0 ; k <=6; k+=2) {
    console.log(k);
}

for (let p = 0 ; p <=9; p++) {
    console.log(`2 x ${p} = ${2*p}`);
}

console.log('----------------------');

/*3단 홀수만 출력 */
for (let i = 0 ; i <=9 ; i++) {
    if ( i%2 != 0 ){
    console.log(`3 x ${i} = ${3*i}`);
    }
}

console.log('----------------------');

/*3단 홀수만 출력 ★★ */
for (let w = 1 ; w <=9; w+=2) {
    console.log(`3 x ${w} = ${3*w}`);
}

console.log('----------------------');

/*3단 홀수만 출력 */
for (let r = 0 ; r <=9 ; r++) {
    if ( r%2 == 0 ){
        continue;
    }
    console.log(`3 x ${r} = ${3*r}`);
}

console.log('----------------------');

/* do while 
    조건에 상관없이 한 번은 실행 보장 
    맞으면 반복 */
let t = 20;

do {
    console.log('집에 가고 싶어요');
    t ++;
} while (t < 30);