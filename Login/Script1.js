document.querySelector(".register").addEventListener("click", function(e){

e.preventDefault();

let email = document.querySelector('input[type="email"]').value;
let password = document.querySelector('input[type="password"]').value;

if(email === "" || password === ""){
alert("Please fill in all fields");
return;
}

alert("Sign in successful!");

});