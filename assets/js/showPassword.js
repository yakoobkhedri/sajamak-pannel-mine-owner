const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const togglePassword3 = document.querySelector("#togglePassword3");
const password = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");
const password3 = document.querySelector("#pass3");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});

togglePassword2.addEventListener("click", function () {
  // toggle the type attribute
  const type = password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});

togglePassword3.addEventListener("click", function () {
  // toggle the type attribute
  const type = password3.getAttribute("type") === "password" ? "text" : "password";
  password3.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});