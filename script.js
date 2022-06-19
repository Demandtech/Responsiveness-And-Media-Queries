

let form = document.getElementById('form');

form.addEventListener('submit', function(e){
   e.preventDefault();
   let firstNameError = document.getElementById("fname-error");
   let firstName = document.getElementById("first-name");
   let lastNameError = document.getElementById("lname-error");
   let lastName = document.getElementById("last-name");
   let email = document.getElementById("email");
   let emailError = document.getElementById("email-error");
   let password = document.getElementById("password");
   let passwordError = document.getElementById("password-error");

   if(firstName.value == ""){
     firstName.style.borderColor = "hsl(0, 100%, 74%)";
     firstNameError.innerHTML = "First name can not be empty";
   }else{
     firstName.style.borderColor = "green";
     firstNameError.innerHTML = "";
   }

   if(lastName.value == ""){
      lastName.style.borderColor = "hsl(0, 100%, 74%)";
      lastNameError.innerHTML = "Last Name can not be empty";
      
   } else{
       lastName.style.borderColor = "green";
       lastNameError.innerHTML = "";
   }

   if (email.value == "") {
       email.style.borderColor = "hsl(0, 100%, 74%)";
       emailError.innerHTML = "Look like this is not an email";
      
   } else{
       email.style.borderColor = "green";
       emailError.innerHTML = "";
   }

   if (password.value == "" || password.value.length < 8) {
       password.style.borderColor = "hsl(0, 100%, 74%)";
       passwordError.innerHTML = "Password can not be empty";
      
   } else{
       password.style.borderColor = "green";
       passwordError.innerHTML = "";
   } 
       
   
       
   
});


