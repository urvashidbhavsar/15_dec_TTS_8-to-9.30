function all_blank(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    if(fname == "" || lname == "" || (male == false && female == false) || dob == "" || address == "" || city == -1 ){
        document.getElementById("msg").innerText = "Enter firstname";
        document.getElementById("msg1").innerText = "Enter lastname";
        document.getElementById("msg2").innerText ="Select Gender"
        document.getElementById("msg3").innerText = "Select Date"
        document.getElementById("msg4").innerHTML = "Enter Address";
        document.getElementById("msg5").innerHTML = "Select City";
        return false
    }else{
        document.getElementById("msg").innerText = "";
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText ="";
        document.getElementById("msg3").innerText = "";
        document.getElementById("msg4").innerText = "";
        document.getElementById("msg5").innerHTML = "";

        return false
    }
}

 // document.getElementById("fname").innerHTML = "<style>#fname{border : 2px solid red;}</style>"