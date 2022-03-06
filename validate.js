function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user"){
    alert(window.open("https://www.youtube.com/watch?v=I2weoKK_vT4"));
    return false;
}
else
    alert("login failed");
}