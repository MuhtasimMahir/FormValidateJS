var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function setError(element, message) {
    element.innerHTML = message;
}

function setBorderColor(inputElement, color) {
    inputElement.style.borderBottomColor = color;
}

function validateName() {
    var nameInput = document.getElementById("contact-name");
    var name = nameInput.value;

    if (name.length === 0) {
        setError(nameError, "Name is required");
        setBorderColor(nameInput, 'red');
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        setError(nameError, "Write Full name");
        setBorderColor(nameInput, 'red');
        return false;
    }
    setError(nameError, '<i class="fa-solid fa-check"></i>');
    setBorderColor(nameInput, 'green');
    return true;
}

function validatePhone() {
    var phoneInput = document.getElementById("contact-phone");
    var phone = phoneInput.value;

    if (phone.length === 0) {
        setError(phoneError, 'Phone no is required');
        setBorderColor(phoneInput, 'red');
        return false;
    }
    if (phone.length !== 11) {
        setError(phoneError, 'Phone no should be 11 digits');
        setBorderColor(phoneInput, 'red');
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        setError(phoneError, 'Only digits');
        setBorderColor(phoneInput, 'red');
        return false;
    }
    setError(phoneError, '<i class="fa-solid fa-check"></i>');
    setBorderColor(phoneInput, 'green');
    return true;
}

function validateEmail() {
    var emailInput = document.getElementById("contact-email");
    var email = emailInput.value;

    if (email.length === 0) {
        setError(emailError, 'Email is required');
        setBorderColor(emailInput, 'red');
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setError(emailError, 'Email invalid');
        setBorderColor(emailInput, 'red');
        return false;
    }
    setError(emailError, '<i class="fa-solid fa-check"></i>');
    setBorderColor(emailInput, 'green');
    return true;
}

function validateMessage() {
    var messageInput = document.getElementById('contact-message');
    var message = messageInput.value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        setError(messageError, left + ' more characters required');
        setBorderColor(messageInput, 'red');
        return false;
    }
    setError(messageError, '<i class="fa-solid fa-check"></i>');
    setBorderColor(messageInput, 'green');
    return true;
}

function validateForm() {
    var isValid = true;

    if (!validateName()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateMessage()) isValid = false;

    if (!isValid) {
        submitError.style.display = 'block';
        setError(submitError, 'Please fix errors to submit.');
        setTimeout(function() { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;
}
