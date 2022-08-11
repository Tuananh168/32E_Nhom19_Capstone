window.onload = function () {
    renderWarning();
}


document.querySelector('#btnSubmit').onclick = function () {
    var user = new Personal();
    // console.log(10)

    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.name = document.querySelector('#name').value;
    user.phone = document.querySelector('#phone').value;
    var radios = document.getElementsByName('genderS');
for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
   
    user.gender = radios[i].value;
    
    break;
  }
}

var valid = true;
valid &= kiemTraRong(user.email, '#warningEmail', 'Email')&kiemTraRong(user.name, '#warningName', 'Name') &kiemTraRong(user.password, '#warningPW', 'Password')&kiemTraRong(user.phone, '#warningPhone', 'Phone')

valid &= matchPassword('#password', '#passwordConfirm', '#errPW2');  

// valid &= checkGioiTinh(user.gender, '#warningGender', 'Gender')

valid &= kiemTraEmail (user.email, '#errEmail', 'Email');
valid&= kiemTraTatCaKyTu(user.name, '#errName', 'Name')&kiemTraTatCaSo(user.phone,' #errPhone', 'Phone')&CheckPassword(user.password, '#errPW', 'Password');




if (!valid) {
    return;
}






    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
        
    });

    promise.then(function (result) {      

        console.log(result.data);
        document.querySelector('#noti').innerHTML = ` <span class='alert alert-dark'>${result.data.message}</span>
        ` ;
        
    }).catch(function (error) {
        console.log(error);
        document.querySelector('#noti').innerHTML = ` <span class='alert alert-dark'>Đăng kí không thành công! - ${error.message}</span>
        ` ;
    });
}


function renderWarning (){
    var html = '';
    html += `
    <span>(*)</span>
    `;
    document.querySelector('#warningEmail').innerHTML = html;
    document.querySelector('#warningPW').innerHTML = html;
    document.querySelector('#warningPW2').innerHTML = html;
    document.querySelector('#warningName').innerHTML = html;
    document.querySelector('#warningPhone'). innerHTML =  html;



    // console.log("document.querySelector('#phone').value: ", document.querySelector('#phone').value);
    // if (document.querySelector('#phone').value==null) {
    //     document.querySelector('#warningPhone'). innerHTML =  html;
    

}

// function notiMessage (){
//     var content = '';
//     content += `
//      <div class="alert alert-success noti" id="noti" >
//         <strong>${result.data.message}</strong>
//     </div>
    
//     `

//     document.querySelector('#noti').innerHTML = content;
// }








    // var valid = true;

    // valid &= kiemTraRong(user.email, '#warning', 'Email')


    // if (!valid) {
    //     return;
    // }





