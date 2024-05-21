"use strict";
const signUpForm = document.querySelector(".sign_up_form");
const emailField = document.querySelector(".email_field");
const inputField = document.querySelectorAll(".input_field");
const passEye = document.querySelectorAll(".pass_eye");

// eye open and close logic
passEye.forEach((item) => {
     item.addEventListener("click", () => {
          const passInput = item.previousElementSibling;

          if (passInput.getAttribute("type") === "text") {
               passInput.setAttribute("type", "password");
               item.classList.replace("iconoir-eye-closed", "iconoir-eye");
          } else {
               passInput.setAttribute("type", "text");
               item.classList.replace("iconoir-eye", "iconoir-eye-closed");
          }
     });
});

// run validation form function on click of sign up button.
signUpForm.addEventListener("submit", (e) => {
     e.preventDefault();

     if (validateField()) {
          console.log("form valid");
     }
});

// run validation form function on write of all input field
inputField.forEach((item) => {
     item.addEventListener("keyup", () => {
          validateField();
     });
});

const validateField = () => {
     let validation = false;

     inputField.forEach((item) => {
          const inputElement = item.querySelector("input");
          const inputElementName = item.querySelector("input").getAttribute("name");
          const errorElement = item.nextElementSibling;

          if (inputElementName === "email") {
               inputElement.value
                    .trim()
                    .match(
                         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    )
                    ? console.log("email valid")
                    : console.error("email not valid");
          }

          if (inputElementName === "password") {
               inputElement.value.trim().match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
                    ? console.log("password valid")
                    : console.error("password not valid");
          }

          if (inputElementName === "confirm_password") {
          }
     });

     return validation;
};
