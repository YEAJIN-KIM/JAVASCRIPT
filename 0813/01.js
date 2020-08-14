" use strict";

/* 구구단 출력 */
for (let i = 1; i < 10; i++) {
    console.log('----★----★----★----★----★----');
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
 
}

console.log('----★----★----★----★----★----');

/*홀수만 출력 ★★ */
for (let i = 1; i < 10; i+=2) {
    console.log('----★----★----★----★----★----');
    for (let j = 1; j <= 9 ; j+=2) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
 
}

console.log('----★----★----★----★----★----');

let a = 0;

while (true) {
    console.log(a);
    a++;
    if (a>3) {
        break; //반복문 탈출 !
    }
    
}

console.log('----★----★----★----★----★----');

for (let a = 0;;) { // ;; true와 동일 
    console.log(a);
    a++;
    if (a>3) {
        break; //반복문 탈출 !
    }
    
}

console.log('----★----★----★----★----★----');

/* 2중 for 문 */
for (let dan = 2; dan <= 9; dan ++) {
    console.log("----★----★ "+ dan + "단----★----★ ")
    for (let i = 1; i <=9 ; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
        
    }
    
}

console.log('----★----★----★----★----★----');

/*  ★
    ★★
    ★★★
    ★★★★
    ★★★★★

    ★★★★★
    ★★★★
    ★★★
    ★★
    ★ 
    
    ★★★★
    ★★★★
    ★★★★

       ★
      ★★
     ★★★
    ★★★★
    
    ★★★★
     ★★★
      ★★
       ★


    */
 
function call() {
    for (let i = 1; i <6; i++) { // 줄을 바꿀거에요! 
        for (let j = 1; j<=i; j++) { //별을 찍을거에요! 
            document.write('★'); //별의 개수는 위의 i의 값만큼 찍어주세요 
        }
        document.write('<br>'); //줄을 바꿔주세요!
    }

    document.write('<br>')

    for (let i = 1; i <6; i++) {
        for (let j = 1; j<=6-i; j++) {
            document.write('★');
        }
        document.write('<br>');
    }

    document.write('<br>')

    for (let i = 0; i<3 ;i++) {
        for (let j = 0; j< 4; j++) {
            document.write('★');
        }
        document.write('<br>');
    }

    document.write('<br>')

    for (let i = 0 ; i < 4 ; i++) {
        for (let j = 0 ; j < 3 - i ; j++ ) {
            document.write('&nbsp');
        }
        for (let j = 1 ; j < i+2 ; j++) {
            document.write('★');
        }
        document.write('<br>')
    }

    document.write('<br>')

    for (let i = 0 ; i < 4 ; i++) {

        for (let j = 0 ; j < i ; j++ ) {
            document.write('&nbsp');
        }
        for (let j = 1 ;j < 5-i ; j++) {
            document.write('★');
        }
        document.write('<br>')
    }
 }


  
    