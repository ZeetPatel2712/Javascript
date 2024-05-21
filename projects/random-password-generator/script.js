const passwordBox = document.querySelector(".password_box input");
const copyIcon = document.querySelector(".copy_icon");
const rangeInput = document.querySelector(".range_box input");
const sliderNumber = document.querySelector(".slider_number");
const generateBtn = document.querySelector(".generate_btn");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

const generatePassword = () => {
     let newPassword = "";

     for (let i = 0; i <= rangeInput.value; i++) {
          let randomNumber = Math.floor(Math.random() * allCharacters.length);
          newPassword += allCharacters[randomNumber];
     }

     passwordBox.value = newPassword;
     copyIcon.classList.replace("iconoir-clipboard-check", "iconoir-paste-clipboard");
};

rangeInput.addEventListener("input", () => {
     sliderNumber.textContent = rangeInput.value;
     generatePassword();
});

generateBtn.addEventListener("click", generatePassword);

copyIcon.addEventListener("click", () => {
     navigator.clipboard.writeText(passwordBox.value);
     copyIcon.classList.replace("iconoir-paste-clipboard", "iconoir-clipboard-check");
});

generatePassword();
