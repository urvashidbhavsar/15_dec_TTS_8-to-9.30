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