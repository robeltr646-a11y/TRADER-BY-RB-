function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;


let remember =
document.getElementById("remember").checked;



if(user=="admin" && pass=="RB2026"){


if(remember){

localStorage.setItem(
"login",
"true"
);

}


window.location.href="dashboard.html";


}

else{


document.getElementById("message")
.innerHTML=
"❌ Wrong Username or Password";


}


}


// Auto Login

if(localStorage.getItem("login")=="true"){

window.location.href="dashboard.html";

}
