"use strict";

/* 함수 : 어떤 기능을 필요할 때 사용하려고 정리한 것
    재사용 가능 */

function call() {
    for (let dan = 2; dan <= 9; dan ++) {
        document.write("----★----★ "+ dan + "단----★----★ " + "<br>")
        for (let i = 1; i <=9 ; i++) {
            document.write(`${dan} x ${i} = ${dan * i} <br>`);
            
        }
        
    }
}

/* 파라미터가 있는 함수 : 값을 2개 넘겨받자 ~!  */

function add(a,b) {
    document.write(a+b);    
}
    
function call2( ) {
    let myBox = document.f.inputnum; //input Box
    let myVal = myBox.value;
    for (let i = 1; i<=9; i++) {
        console.log(`${myVal} x ${i} = ${myVal * i}`)  
    }
    console.log('----★----★----★----★----★----');
    myBox.value = "";
    return false;
    
}

function test1(){
    let myBox1 =  document.test.input;
    let myVal1 = myBox1.value;
    for (let dan = `${myVal1}`; dan <= 9; dan++) {
        console.log("----★----★ "+ dan + "단----★----★ ")
        for (let i = 1; i <=9 ; i++) {
            console.log(`${dan} x ${i} = ${dan * i}`);
        }
    }
    myBox1.value = "";
    return false;
}