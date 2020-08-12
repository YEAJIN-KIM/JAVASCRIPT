"use strict";

/* switch case ( 조건문 ) : if 문과 대체 가능
    point: 흐름 제어 */

let age = 30 ;

switch (age) {
    case 2:
        console.log(" 아 응애에요 ^~^");        
        break;

    case 20:
        console.log(" 술 쳐드셈 ^~^");        
        break;
    
    case 30:
        console.log(" 노후.. 준비를..");        
        break;    
        
    default:
        console.log("헛..허..");
        break;
}

console.log('----------------------');

/* 아아 카페라떼 바닐라라떼 메끼아로 "만들줄 몰라요"  */

let menu = 5 ;

switch (menu) {
    case 1:
        console.log("아아");        
        break;

    case 2:
        console.log("카페라떼");        
        break;
    
    case 3:
        console.log("바닐라라떼");        
        break;    
    
    case 4:
        console.log("바닐라라떼");        
        break;      
        
    default:
        console.log("만들줄 몰라요 8-8");
        break;
}

console.log('----------------------');

/* 달력  x 월은 x 일까지  */
let month = 2 ;

switch (month) {
    case 1:
        console.log('31일 까지 있어용!');
        break;
    
    case 2:
        console.log('28일 까지 있어용!');
        break;
    
    case 3:
        console.log('31일 까지 있어용!');
        break;    

    case 4:
        console.log('30일 까지 있어용!');
        break;          

    case 5:
        console.log('31일 까지 있어용!');
        break;       

    case 6:
        console.log('30일 까지 있어용!');
        break;   
        
    case 7:
        console.log('31일 까지 있어용!');
        break;   

    case 8:
        console.log('31일 까지 있어용!');
        break;   

    case 9:
        console.log('30일 까지 있어용!');
        break;   

    case 10:
        console.log('31일 까지 있어용!');
        break; 

    case 11:
        console.log('30일 까지 있어용!');
        break; 

    case 12:
        console.log('31일 까지 있어용!');
        break; 

    default:
        console.log('월을 다시 지정해 주세용!');
        break;
}



console.log('----------------------');

/* 달력  x 월은 x 일까지  */
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31일 까지 있어용!');
        break;
    
    case 2:
        console.log('28일 까지 있어용!');
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30일 까지 있어용!');
        break;                

    default:
        console.log('월을 다시 지정해 주세용!');
        break;
}

console.log('----------------------');

/* 군대  */

let grade = "이병";

switch (grade) {
    case '이병':
        console.log('-_-^ 관등성명');

    case '일병':
        console.log('/ㅁ\ 훈련');

    case '상병':
        console.log('8ㅁ8 이별');     
        
    case '병장':
        console.log('-_- zzz 잠 ');
        break;  

    default:
        break;
}

console.log('----------------------');
