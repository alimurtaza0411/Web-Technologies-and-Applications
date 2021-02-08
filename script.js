function check(f){
    for(let i=0;i<f.length-1;i++){
        var el = f.elements[i];
        var err = f.id+'-'+el.name+'-error';
        if(el.name=="add-det") continue;
        if(el.value==""){
            el.style.borderColor = "red";
            document.getElementById(err).innerHTML = "*Please enter valid input";
            return false;
        }
        else{
            document.getElementById(err).innerHTML = ""
            el.style.borderColor="white";
        }
        if(el.name=="email"){
            var regexp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$");
            if(!regexp.test(el.value)){
                el.style.borderColor = "red";
                document.getElementById(err).innerHTML = "Invalid Email"
                return false;
            }
        }
        if(el.name=="password" && f.id=="sign-up"){
            var regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$");
            if(!regexp.test(el.value)){
                el.style.borderColor = "red";
                document.getElementById(err).innerHTML = "*Weak Password";
                return false;
            }
        }
        if(el.name=="con-password" && f.id=="sign-up"){
            if(el.value!=f.elements[i-1].value){
                el.style.borderColor = "red";
                document.getElementById(err).innerHTML = "*Password does not match";
                return false;
            }
        }
        if(el.name=="price"){
            var regexp = new RegExp("^[0-9]*$");
            if(!regexp.test(el.value)){
                el.style.borderColor = "red";
                document.getElementById(err).innerHTML="Invalid Amount";
                return false;
            }
        }
    }
    return false;
}