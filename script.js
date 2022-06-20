

let form = document.getElementById('form');

form.addEventListener('submit', function(e){
   e.preventDefault();
   let firstName = document.getElementById("first-name");
   let firstNameError = document.getElementById("fname-error");
   let firstNameErrorImage = document.getElementById("fname-error-img");

   let lastName = document.getElementById("last-name");
   let lastNameError = document.getElementById("lname-error");
   let lastNameErrorImage = document.getElementById("lname-error-img");
   
   let email = document.getElementById("email");
   var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let emailError = document.getElementById("email-error");
   let emailErrorImage = document.getElementById("email-error-img");

   let password = document.getElementById("password");
   let passwordError = document.getElementById("password-error");
   let passwordErrorImage = document.getElementById("password-error-img");
   

   if(firstName.value == ""){
     firstName.style.borderColor = "hsl(0, 100%, 74%)";
     firstNameError.innerHTML = "First name can not be empty";
     firstNameErrorImage.style.display = "block";
   }else{
     firstName.style.borderColor = "green";
     firstNameError.innerHTML = "";
     firstNameErrorImage.style.display = "none";
   }

   if(lastName.value == ""){
      lastName.style.borderColor = "hsl(0, 100%, 74%)";
      lastNameError.innerHTML = "Last Name can not be empty";
      lastNameErrorImage.style.display = "block";
      
   } else{
       lastName.style.borderColor = "green";
       lastNameError.innerHTML = "";
       lastNameErrorImage.style.display = "none";
   }

   if (pattern.test(email.value)) {
       email.style.borderColor = "green";
       errorImage.style.display = "none";
       text.innerHTML = "";
       return true;
      
   } else{
      email.style.borderColor = "hsl(0, 100%, 74%)";
      emailError.innerHTML = "Look like this is not an email";
      emailErrorImage.style.display = "block";
   }

   if (password.value == "") {
       password.style.borderColor = "hsl(0, 100%, 74%)";
       passwordError.innerHTML = "Password can not be empty";
       passwordErrorImage.style.display = "block";
      
   } else{
       password.style.borderColor = "green";
       passwordError.innerHTML = "";
       passwordErrorImage.style.display = "block";
   } 
       
   
       
   
});


