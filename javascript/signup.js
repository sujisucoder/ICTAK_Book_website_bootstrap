

function validation() {
var username = document.getElementById('form3ExampleName').value;
var phone = document.getElementById('form3ExamplePhone').value;
var email = document.getElementById('form3ExampleEmail').value;
var password = document.getElementById('form3ExamplePassword').value;
var Cpassword = document.getElementById('form3ExampleCPassword').value;

var usercheck = /^[A-Za-z. ]{3,30}$/;
var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
var emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
var mobileCheck = /^[789][0-9]{9}$/;

if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML = ""; 
}else{
    document.getElementById('usererror').innerHTML = "** username is invalid"
    return false;
}

if(mobileCheck.test(phone)){
    document.getElementById('phoneerror').innerHTML = ""; 
}else{
document.getElementById('phoneerror').innerHTML = "** mobile number  is invalid"
return false;
}

if(emailCheck.test(email)){
    document.getElementById('emailerror').innerHTML = ""; 
}else{
document.getElementById('emailerror').innerHTML = "** email is invalid"
return false;
}

if(passwordCheck.test(password)){
    document.getElementById('passworderror').innerHTML = ""; 
}else{
document.getElementById('passworderror').innerHTML = "** Password is invalid( password must contain 8 characters, special character and number)"
return false;
}

if(Cpassword.match(password)){
    document.getElementById('Cpassworderror').innerHTML = "";
    alert("successfully logged in ");
    
}else{
document.getElementById('Cpassworderror').innerHTML = "** Password doesnt match "
return false;
}


}




