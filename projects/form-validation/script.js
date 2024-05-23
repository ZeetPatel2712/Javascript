"use strict";
const signUpForm = document.querySelector(".sign_up_form");
const passEyes = document.querySelectorAll(".pass_eye");
const field = document.querySelectorAll(".field");

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

// Success Massage
const successMsg = (msg) => {
      return `
         <div class="success">
               <i class="iconoir-double-check"></i>
               <span>${msg}</span>
         </div>
     `;
};

// Error Massage
const errorMsg = (msg) => {
      return `
         <div class="error">
               <i class="iconoir-warning-circle"></i>
               <span>${msg}</span>
         </div>
     `;
};

// Form validation

const validateForm = () => {
      let isValid = true;

      field.forEach((field) => {
            let inputElement = field.querySelector(".input_field input");
            let inputElementValue = field.querySelector(".input_field input").value.trim();
            let inputName = field.querySelector(".input_field input").getAttribute("name");
            let inputMsg = field.querySelector(".input_msg");

            if (!inputElementValue) {
                  inputMsg.innerHTML = errorMsg("Please fill up all field.");
                  isValid = false;
            } else {
                  inputMsg.innerHTML = successMsg("Input Field Is Valid.");
            }

            if (inputName === "email") {
                  const emailPattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                  if (!inputElementValue.match(emailPattern) && inputElementValue.length !== 0) {
                        inputMsg.innerHTML = errorMsg("Email is not valid.");
                        isValid = false;
                  }
            }

            if (inputName === "password") {
                  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/;

                  if (!inputElementValue.match(passwordPattern) && inputElementValue.length !== 0) {
                        inputMsg.innerHTML = errorMsg(
                              "Please enter a password that contains 8 characters, uppercase, lowercase and special symbol."
                        );
                        isValid = false;
                  } else if (inputElementValue.length >= 16) {
                        inputMsg.innerHTML = errorMsg(
                              "Your password is to long please make a password between 8 to 16 character"
                        );
                        isValid = false;
                  }
            }

            if (inputName === "confirm_password") {
                  const passwordElementValue = document.querySelector(".input_field_password input").value.trim();

                  if (inputElementValue !== passwordElementValue && inputElementValue.length !== 0) {
                        inputMsg.innerHTML = errorMsg("Password dose't match. ");
                        isValid = false;
                  }
            }
      });

      return isValid;
};

// Form submission handling
signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      validateForm() ? console.log("form submitted 🚀") : console.log("something wrong 😔");
});

// Validation on input change

field.forEach((field) => {
      let inputElement = field.querySelector(".input_field input");

      inputElement.addEventListener("keyup", () => {
            validateForm();
      });
});
