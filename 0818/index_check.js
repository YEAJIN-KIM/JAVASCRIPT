/* <input> 을 넣을 시 
    해당하는 글자가 없으면 true 있으면 false */

/* <input> 글자수를 넣으면 
    해당 글자수보다 작게 썼으면 true 아니면 false */

function check(){
    let idInput = document.f.i1;
    let pwInput = document.f.i2;
    let pw2Input = document.f.i3;
    let phoneInput = document.f.i4;

    if (isEmpty(idInput) || lessThan(idInput, 4)) {
        alert('ID ERROR');
        idInput.value =""; // 내용 초기화
        idInput.focus(); // 커서 지정
        return false;

    } if (isEmpty(pwInput) || lessThan(pwInput, 4) || notEquals(pwInput, pw2Input)){
        alert('PW ERROR');
        pwInput.value =""; // 내용 초기화
        pw2Input.value="";
        pwInput.focus(); // 커서 지정
        return false;
        
    }  if (isNotNum(phoneInput)) {
        alert('PHONE ERROR');
        phoneInput.value="";
        phoneInput.focus(); // 커서 지정
        return false;
    } 

    return true;
}



