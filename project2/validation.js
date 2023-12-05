function submitForm() {
    // Clear previous errors
    document.getElementById('errorContainer').innerHTML = "";

    // Perform validation
    let errors = [];
    if (!validateName('firstName') || !validateName('lastName')) {
        errors.push("Please enter a valid first and last name.");
    }
    if (!validateAddress('city') || !validateAddress('state') || !validateZipCode('zipCode')) {
        errors.push("Please enter a valid address.");
    }
    if (!validatePhoneNumber('areaCode') || !validatePhoneNumber('phoneNumber')) {
        errors.push("Please enter a valid phone number.");
    }
    if (!validateEmail('email') || !validateConfirmEmail()) {
        errors.push("Please enter a valid email address.");
    }
    if (!validateMealPreference()) {
        errors.push("Please select a meal preference.");
    }
    if (!validateContactMethod()) {
        errors.push("Please select at least two contact methods.");
    }

    // Display errors or submit the form
    if (errors.length > 0) {
        document.getElementById('errorContainer').innerHTML = errors.join("<br>");
    } else {
        // Email the form data (implementation needed)
        alert("Form submitted successfully!"); // Placeholder for successful submission
        document.getElementById('contactForm').reset(); // Reset the form after submission
    }
}

function resetForm() {
    // Reset the form
    document.getElementById('contactForm').reset();
    // Clear previous errors
    document.getElementById('errorContainer').innerHTML = "";
}

function validateName(fieldName) {
    let name = document.getElementById(fieldName).value;
    return /^[A-Za-z]+$/.test(name);
}

function validateAddress(fieldName) {
    let address = document.getElementById(fieldName).value;
    return /\w+/.test(address);
}

function validateZipCode(fieldName) {
    let zipCode = document.getElementById(fieldName).value;
    return /^\d{5}$/.test(zipCode);
}

function validatePhoneNumber(fieldName) {
    let phoneNumber = document.getElementById(fieldName).value;
    return /^\d{3}$/.test(phoneNumber);
}

function validateEmail(fieldName) {
    let email = document.getElementById(fieldName).value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateConfirmEmail() {
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    return email === confirmEmail;
}

function validateMealPreference() {
    return document.querySelector('input[name="mealPreference"]:checked') !== null;
}

function validateContactMethod() {
    let selectedContactMethods = document.querySelectorAll('input[name="contactMethod"]:checked');
    return selectedContactMethods.length >= 2;
}
