function kiemTraRong(value, selectorError, name) {
    // .trim(): loại bỏ khoảng trtoosng đầu và cuối của chuỗi
    // "  abc  "=> abc
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML =`<span class ='noti-warning'>${name + ' không được trống!'}</span>`;
    // name + ' không được bỏ trống!';
    return false;

}

function kiemTraTatCaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML =  `<span class ='err-warning'>${name + ' phải là chữ!'}</span>`;
   
    return false;
}


function kiemTraTatCaSo(value, selectorError, name) {
    var regexLetter = /^[0-9]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = `<span class ='err-warning'>${name + ' phải là số!'}</span>`;
    return false;
}
// function checkGioiTinh(value, selectorError, name) {
//     if (value!=="0") {
//         document.querySelector(selectorError).innerHTML = '';
//         return true;
//     }
//     document.querySelector(selectorError).innerHTML = `<span class="warning-gender">${name +'phải được chọn!'}</span>`;
//     return false;
// }

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength;
        return false;
    }
    document.querySelector(selectorError).innerHTML = `<span class ='noti-warning'>${name + ' phải từ 10 đến 11 số!'}</span>`;
    return true;
}


// function kiemTraPW(value) {

//     var regexPw=  /[A-Z]/       .test(value) &&
//            /[a-z]/       .test(value) &&
//            /[0-9]/       .test(value) &&
//            /[^A-Za-z0-9]/.test(value) &&;
//     return false;

// }

function CheckPassword(value, selectorError, name) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if (decimal.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = `<span class ='err-warning'><br>${name + ' có độ dài 6 đến 10 ký tự và phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt!'}</span>`;

    return false;
}



// function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
//     value = Number(value);
//     if (value > maxValue || value < minValue) {
//         document.querySelector(selectorError).innerHTML = name + ' từ ' + minValue + ' đến ' + maxValue;
//         return false;
//     }
//     document.querySelector(selectorError).innerHTML = '';
//     return true;
// }


function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector('#errEmail').innerHTML = `<span class='err-warning'>${name + ' không đúng định dạng!'}</span>`
    // name + ' không đúng định dạng email !';
    return false;

}

function matchPassword(id1, id2, selectorError) {  
    var pw1 = document.querySelector(id1).value;  
    console.log(pw1)
    var pw2 = document.querySelector(id2).value  
    if(pw1 != pw2){   
        document.querySelector(selectorError).innerHTML = `<span class ='err-warning'>Password chưa trùng khớp</span>`;
        return false;
    } 
        document.querySelector(selectorError).innerHTML = ''; 
        return true;
      
    }  


