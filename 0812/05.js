"use strict";

/* 조건문
    if(condition) {
        만족시 실행되는 범위
    } else {
        아닐시 실행되는 범위 ( 조건 외 )
    }*/

let age = 30;

/*나이가 30 이상이면 '안녕하십니까 ' 아니면 '꺼져' */
if (age >= 30) {
    console.log('안녕하십니까');        
} else {
    console.log('꺼져');
}

/* 나이가 10살 미만이고, 키가 150 미만이면 'ㅎ 애송이 '
    아니면 ' 안녕 !' */

let child = { age: 3 , height: 100 };

if (child.age < 10 && child.height < 150) {
    console.log('ㅎ 애송이 ');
} else {
    console.log('안녕 !');
}

/* 나이가 1살이 넘고 5살 미만이면  'ㅎㅅㅎ' */
if (1 < child.age && child.age < 5) {
    console.log('ㅎㅅㅎ'); 
} else {
    console.log('ㅍㅅㅍ');
}

console.log('--------------------');

/* 성인과 아이가 동반 탑승 가능 여부 */
let adult = { age : 30 , height : 180 };

/* 성인 나이가 20살이 넘으며, 아이가 3살 이상이고 
    아이키가 80이상이면 '동반 탑승 가능'
    아닌경우 '탑승 불가'  */
if (adult.age > 20 && child.age >= 3 && child.height >= 80 ) {
    console.log('동반 탑승 가능');
} else {
    console.log('탑승 불가 ');
}

/*  && 가 || 보다 우선 순위가 높음 
    t || t && t = t
    t || t && f = t
    t || f && t = t
    t || f && f = t */

