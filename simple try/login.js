const submit = document.getElementById("submitButton");
const email =document.getElementById("email");
const password =document.getElementById("password");

submit.addEventListener('click', function() {
    if(password == true & email == true)
 {
    window.location.href = 'https://www.google.com';
 }else
 {
    alert("Not found");
 }
});