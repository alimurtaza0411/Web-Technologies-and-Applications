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
    if(f.id=="sign-up"){
        window.alert("Sucess! You'r Account is ready");
    }
    if(f.id=='login'){
        window.alert("Sucess! You'r succesfully Logged in");
    }
    if(f.id="demo"){
        window.confirm("Do you really want to submit the product details?")
    }
    return true;
}
var endDate = new Date("Jan 01, 2022 00:00:00")
function updateTimer(){
    var now = new Date();
    var rem = endDate-now;
    document.getElementById('day').innerHTML = Math.floor(rem / (1000 * 60 * 60 * 24));
    document.getElementById('hour').innerHTML = Math.floor((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('min').innerHTML = Math.floor((rem  % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('sec').innerHTML = Math.floor((rem  % (1000 * 60)) / 1000);
    setInterval(updateTimer,1000);

}
var total_bannar = 2;
var bannar_id = 1;
function nextBannar(){
    var ban = "ban"+bannar_id;
    document.getElementById(ban).style.display="none";
    if(bannar_id==total_bannar) bannar_id=1;
    else bannar_id+=1;
    ban = "ban"+bannar_id;
    document.getElementById(ban).style.display="flex";

}
function prevBannar(){
    var ban = "ban"+bannar_id;
    document.getElementById(ban).style.display="none";
    if(bannar_id==1) bannar_id=total_bannar;
    else bannar_id-=1;
    ban = "ban"+bannar_id;
    document.getElementById(ban).style.display="flex";

}
