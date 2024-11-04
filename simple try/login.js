const submit = document.getElementById("submitButton");
const email =document.getElementById("email");
const password =document.getElementById("password");

submit.addEventListener('click', function() {
    if(password == "password" & email == "emailid@gamil.com")
 {
    window.location.href = 'https://www.google.com';
 }else
 {
    alert("Not found");
 }
});