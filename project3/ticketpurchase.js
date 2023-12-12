// Countdown Timer
let countdown = 600; // 10 minutes in seconds
const timerMessageElement = document.getElementById('timerMessage');

function updateCountdown() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerMessageElement.textContent = `Quick! You have ${formattedTime} to complete your purchase.`;
}

const timer = setInterval(function() {
    if (countdown <= 0) {
        clearInterval(timer);
        alert('Your timer has expired.');
        location.href = location.href; // Redirect to the same page
    } else {
        updateCountdown();
        countdown--;
    }
}, 1000);

// Function to change background color based on the presence of an error
function setFieldColor(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    field.style.backgroundColor = hasError ? '#ff9999' : 'white';
}

// Function to calculate total and show/hide contact info section
function calculateTotal() {
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    const totalSection = document.getElementById('contactInfoSection');

    if (!isNaN(ticketQuantity) && ticketQuantity >= 1 && ticketQuantity <= 3) {
        setFieldColor('ticketQuantity', false);
        totalSection.style.display = 'block';
    } else {
        setFieldColor('ticketQuantity', true);
        totalSection.style.display = 'none';
    }
}

// Function to complete the purchase and perform validation
function completePurchase() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '' || !isValidEmail(email)) {
        setFieldColor('name', name.trim() === '');
        setFieldColor('email', email.trim() === '' || !isValidEmail(email));
        alert('Please provide valid name and email.');
    } else {
        clearInterval(timer);
        const total = calculateTotalCost();
        alert(`Thank you for your purchase!\nTotal Amount: $${total.toFixed(2)}`);
    }
}

// Function to calculate the total cost
function calculateTotalCost() {
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    return ticketQuantity * 10; // Assuming ticket price is $10
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
