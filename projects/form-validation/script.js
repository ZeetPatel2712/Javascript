"use strict";
const signUpForm = document.querySelector(".sign_up_form");
const passEyes = document.querySelectorAll(".pass_eye");

// Toggle password visibility
passEyes.forEach((eye) => {
     eye.addEventListener("click", () => {
          const passInput = eye.previousElementSibling;
          if (passInput.getAttribute("type") === "text") {
               passInput.setAttribute("type", "password");
               eye.classList.replace("iconoir-eye-closed", "iconoir-eye");
          } else {
               passInput.setAttribute("type", "text");
               eye.classList.replace("iconoir-eye", "iconoir-eye-closed");
          }
     });
});

// Form submission handling
signUpForm.addEventListener("submit", (e) => {
     e.preventDefault();

     validateForm() ? console.log("form submitted 🚀") : console.log("something wrong 😔");
});


const successMsg = () => {
     return `
         <div class="success">
                                   <i class="iconoir-double-check"></i>
                                   <span>Success Message</span>
                              </div>
     `;
}