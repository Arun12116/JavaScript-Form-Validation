let username=document.getElementById("userName");
let password=document.getElementById("password");
let btn=document.getElementById("btn");
let flag=1;

function validatefrom(){

if(username.value==""){
document.getElementById("userError").innerHTML="user name is empty";
    flag =0;
}
else if(username.value.length<4){
    document.getElementById("userError").innerHTML= "user Name require min 4 char";
    flag=0;
}
else{
    document.getElementById("userError").innerHTML="";
    flag=1;
}
if(password.value==""){
    document.getElementById("passwordError").innerHTML= "password is empty";
    flag=0;

}
else{
    document.getElementById("passwordError").innerHTML="";
    flag=1;
}
if(flag){
return true;
}
else{
    return false;
}
}
