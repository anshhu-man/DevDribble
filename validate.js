function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Anshuman"&& password=="7872"){
        alert("You are Successfully Logged in");
        windows.open("https://www.youtube.com/watch?v=I2weoKK_vT4");
        location.reload();
    }
    else{
        alert("Who are you?");
        location.reload();
    }
}
