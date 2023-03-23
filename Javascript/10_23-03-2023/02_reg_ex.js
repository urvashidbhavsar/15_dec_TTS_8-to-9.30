function firstname_reg_ex(){
    let fname = document.getElementById("fname").value;
    let reg_ex_fname = /^[a-zA-Z]*$/;
    if(reg_ex_fname.test(fname)){
        document.getElementById("msg").innerHTML = ""
        return false
    }else{
        document.getElementById("msg").innerHTML = "invalid!!!"
        return false
    }
}
function lastname_reg_ex(){
    let lname = document.getElementById("lname").value;
    let reg_ex_fname = /^[a-zA-Z]*$/;
    if(reg_ex_fname.test(lname)){
        document.getElementById("msg1").innerHTML = ""
        return false
    }else{
        document.getElementById("msg1").innerHTML = "invalid!!!"
        return false
    }
}

function check_address(){
    let address = document.getElementById("address").value;
    if(address.length < 15){
        document.getElementById("msg4").innerHTML = "Enter atleast 15 character"
        return false;
    }else{
        document.getElementById("msg4").innerHTML = "";
        return false;
    }
}

function reg_ex_email(){
    let mail = document.getElementById("mail").value;
    let reg_ex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg_ex.test(mail)){
        document.getElementById("msg6").innerText = "";
        return false
    }else{
        document.getElementById("msg6").innerText = "Enter Email proper";
        return false
    }
}

function check_password(){
    let pass = document.getElementById("pass").value;
    let reg_ex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;

    if(reg_ex.test(pass)){
        document.getElementById("msg7").innerText = "";
        return false
    }else{
        document.getElementById("msg7").innerText = "Enter proper password";
        return false
    }
}
function check_cpassword(){
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if(cpass != pass){
        document.getElementById("msg8").innerText = "password and confirm password does not match"
        return false;
    }else{
        document.getElementById("msg8").innerText = ""
        return false;
    }
}

function check_mobile(){
    let mobile = document.getElementById("mno").value;
    let reg_mo_ex = /^[0-9]*$/;
    if(reg_mo_ex.test(mobile)){
        document.getElementById("msg9").innerText = "";
        return false
    }else{
        document.getElementById("msg9").innerText = "Alphabet not allowed"
        return false 
    }
}

function check_mobile_length(){
    let mobile = document.getElementById("mno").value;
    if(mobile.length < 10){
        document.getElementById("msg10").innerText = "enter proper number";
        return false
    }else{
        document.getElementById("msg10").innerText = ""
        return false 
    }
}