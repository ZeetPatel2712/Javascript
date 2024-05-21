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

// click on sign up button
signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let emptyFieldValidation = false;

      inputField.forEach((item) => {
            const inputElement = item.querySelector("input");
            const errorElement = item.nextElementSibling;

            inputElement.value.trim().length <= 0
                  ? errorElement.classList.remove("hide")
                  : (emptyFieldValidation = true);
      });

      console.log(formValidation());

      //  if (formValidation() && emptyFieldValidation) {
      //        console.log("form submitted 🚀.");
      //  } else {
      //        console.log("something wrong 😔.");
      //  }
});

// form validation logic
const formValidation = () => {
      let validationAns = false;

      inputField.forEach((item) => {
            const inputElement = item.querySelector("input").value.trim();
            const elementName = item.querySelector("input").getAttribute("name");
            const errorElement = item.nextElementSibling;

            if (elementName === "email") {
                  const emailPattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                  if (!inputElement.match(emailPattern)) {
                        errorElement.classList.remove("hide");
                  } else {
                        errorElement.classList.add("hide");
                  }
            }

            if (elementName === "password") {
                  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                  if (!inputElement.match(passwordPattern)) {
                        errorElement.classList.remove("hide");
                  } else {
                        errorElement.classList.add("hide");
                  }
            }

            if (elementName === "confirm_password") {
                  const passwordValue = document.querySelector(".password_field input").value.trim();

                  if (inputElement.length === 0) {
                        errorElement.classList.remove("hide");
                  } else if (passwordValue !== inputElement) {
                        errorElement.classList.remove("hide");
                  } else {
                        errorElement.classList.add("hide");
                  }
            }
      });

      return validationAns;
};

// form validation when write on input
inputField.forEach((item) => {
      const inputElement = item.querySelector("input");
      inputElement.addEventListener("keyup", () => {
            formValidation();
      });
});
