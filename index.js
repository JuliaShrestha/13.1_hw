/*
Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
Поля:

Name - обовьязкове текстове поле
Message - текстове поле не меньше 5 символів
Phone number - обовьязкове поле типу phone. З початком на +380
Email - email обовьязково повинен мати @ та крапку

Після відправки, в консоль відображаємо дані, які ввів користувач.
Під час помилки показувати її під полем.
*/


const submitButton = document.querySelector('#submit-button');

////
function isEmptyInput (inputValue) {

    const emptyInput = /^\s*$/;
    return emptyInput.test(inputValue);
};

////
function areDigits (inputValue) {

    const checkDigits = /\d/g;
    return checkDigits.test(inputValue);
};

////
function isValidMessage (inputValue) {

    const minLength = /^.{5,}$/;
    return minLength.test(inputValue);
};

////
function isValidPhoneNumber (inputValue) {

    const beginNumber = /^\+380\d{9,10}$/;
    return beginNumber.test(inputValue);
};

////
function isValidEmail (inputValue) {
    const validEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return validEmail.test(inputValue);
};


submitButton.addEventListener('click', (event) => {

const userName = document.querySelector('#name').value;
const userMessage = document.querySelector('#message').value;
const userPhone = document.querySelector('#phone').value;
const userEmail = document.querySelector('#email').value;

const errorName = document.querySelector('#error-name');
const errorMessage = document.querySelector('#error-message');
const errorPhone = document.querySelector('#error-phone');
const errorEmail = document.querySelector('#error-email');


    event.preventDefault();

//name
    if(isEmptyInput(userName)) {
        errorName.textContent = '*Name is required and cannot be empty or only spaces!'
        document.querySelector('#name').value = '';
        return;
    } else if (areDigits(userName)) {
        errorName.textContent = '*The name cannot have digits!'
        document.querySelector('#name').value = '';
        return;
    } else {
        errorName.textContent = '';
        console.log(userName.trim());
        document.querySelector('#name').value = '';
    };

    //message    
    if(isValidMessage(userMessage)) {
        errorMessage.textContent = '';
        console.log(userMessage.trim());
        document.querySelector('#message').value = '';
    } else if (!isValidMessage(userMessage)){
        errorMessage.textContent = '*The message should be more than 5 symbols!'
        document.querySelector('#message').value = '';
    }

//phone    
    if(isValidPhoneNumber(userPhone)) {
        errorPhone.textContent ='';
        console.log(userPhone);
        document.querySelector('#phone').value = '';
    } else {
        errorPhone.textContent = '*The number has to start with +380.. and be not longer than 13 digits!';
        document.querySelector('#phone').value = '';
    }

//email    
    if(isValidEmail(userEmail)) {
        errorEmail.textContent ='';
        console.log(userEmail.trim());
        document.querySelector('#email').value = '';
    } else {
        errorEmail.textContent = '*Email has to contain "@" and "."!';
        document.querySelector('#email').value = '';
    }
});