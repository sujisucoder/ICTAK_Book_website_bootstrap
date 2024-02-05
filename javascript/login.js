

function validation() {

    var email = document.getElementById('form3ExampleEmail').value;
    var password = document.getElementById('form3ExamplePassword').value;


    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

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

    
    
    }
    
    