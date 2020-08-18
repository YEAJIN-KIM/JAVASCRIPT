/* validation check
    일반적인 유효성 검사는 잘 정리해 ( 함수 형태)
    왜 ? 재사용을 위해 !
    ----★----★----★----★----★----
    해당 파일을 base 저장용으로 사용헤 
    html ( 조건 ) 마다 가져다 쓸 수 있게 하자 
    ----★----★----★----★----★----*/

/* <input> 을 넣을 시 
    해당하는 글자가 없으면 true 있으면 false */
function isEmpty(input) {

    return !input.value; //없음 

}

/* <input> 글자수를 넣으면 
    해당 글자수보다 작게 썼으면 true 아니면 false */
function lessThan(input, len) {

    return input.value.length < len;
}


/* <input> *2 를 넣으면
    내용이 다를 경우 true 같으면 false */
function notEquals(input1, input2){

    return input1.value != input2.value;

}

/* <input> 을 넣을시 
    숫자가 아니면 true 숫자면 false */
    function isNotNum(input){

        return isNaN(input.value);
    
    }