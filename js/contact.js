var nam_prob = document.getElementById("nam_prob");
var pass_prob = document.getElementById("pass_prob");
var email_prob = document.getElementById("email_prob");
var messagee = document.getElementById("msg");

var showError = function(){
//check name
var name = document.getElementById("contact1").value;
if (!/^[A-Za-z]{3,20}([\s]{1}[\w][\s])?$/.test(name)) {
    nam_prob.style.display= "block";
}else{
       nam_prob.style.display= "none";
}
//check email
var email = document.getElementById("contact2").value;
if (!/^[a-zA-Z]{3,20}[\_]{0,1}[\-]{0,1}[a-zA-Z]{0,20}[\_]{0,1}[\-]{0,1}[a-zA-Z]{0,20}[\_]{0,1}[\-]{0,1}\d{0,7}@([a-zA-Z]{3,10})\.com$/.test(email)) {
    email_prob.style.display= "block";
}else{
    email_prob.style.display= "none";
}
//check password
var password = document.getElementById("contact3").value;
if (password.length<8) {
    
    pass_prob.style.display= "block";
}else{

    pass_prob.style.display= "none";
}//check message

var message=document.getElementById("massege").value;
if(message.length<=0){
    messagee.style.display="block";
}else{
    messagee.style.display="none";
}
if(nam_prob.style.display=="none" && email_prob.style.display=="none" && password.length>=8 &&messagee.style.display=="none" )
{
    document.getElementById("massege").value="";
    document.getElementById("contact3").value="";
    document.getElementById("contact2").value="";
    document.getElementById("contact1").value="";
    alert("done!");
    

}
}
document.getElementById("submit").addEventListener("click",showError);
