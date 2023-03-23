function all_blank(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    let mobile = document.getElementById("mno").value;

    if(fname == "" || lname == "" || (male == false && female == false) || dob == "" || address == "" || city == -1 || mail == "" || pass == "" || cpass == "" ){
        document.getElementById("msg").innerText = "Enter firstname";
        document.getElementById("msg1").innerText = "Enter lastname";
        document.getElementById("msg2").innerText ="Select Gender"
        document.getElementById("msg3").innerText = "Select Date"
        document.getElementById("msg4").innerHTML = "Enter Address";
        document.getElementById("msg5").innerHTML = "Select City";
        document.getElementById("msg6").innerHTML = "Enter Email"
        document.getElementById("msg7").innerHTML = "Enter password"
        document.getElementById("msg8").innerHTML = "Enter confirm password"
        document.getElementById("msg9").innerText = "Enter Mobile no"
        return false
    }else{
        document.getElementById("msg").innerText = "";
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText ="";
        document.getElementById("msg3").innerText = "";
        document.getElementById("msg4").innerText = "";
        document.getElementById("msg5").innerHTML = "";
        document.getElementById("msg6").innerHTML = "";
        document.getElementById("msg7").innerHTML = ""
        document.getElementById("msg8").innerHTML = ""
        document.getElementById("msg9").innerText = ""

        return false
    }
}

function hide_show_password(){
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    if(pass.type == "password" && cpass.type == "password"){
        pass.type = "text"
        cpass.type="text";
    }else{
        pass.type="password";
        cpass.type="password";
    }
}
 // document.getElementById("fname").innerHTML = "<style>#fname{border : 2px solid red;}</style>"