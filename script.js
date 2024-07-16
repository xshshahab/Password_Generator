const pwd = document.getElementById('password');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const popup = document.getElementById('popup');

const number = "0123456789";
const symbol = "~`!@#$%^&*()-_=+{[}]\|?/><";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const genPwd = number + symbol + upperCase + lowerCase;

function generatePassword() {
    let length = lengthSlider.value;
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    while (length > password.length) {
        password += genPwd[Math.floor(Math.random() * genPwd.length)];
    }

    pwd.value = password;
}

function copyPassword() {
    pwd.select();
    document.execCommand('copy');
    showPopup();
    pwd.value = "";
}

function showPopup() {
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 1000);
}

function updateLength(value) {
    lengthValue.textContent = value;
}
