// Get form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Get error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Email validation regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateName() {
    const nameValue = nameInput.value.trim();
    
    if (nameValue === '') {
        showError(nameInput, nameError, 'Name is required');
        return false;
    } else if (nameValue.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    } else if (/\d/.test(nameValue)) {
        showError(nameInput, nameError, 'Name cannot contain numbers');
        return false;
    } else {
        showSuccess(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    
    if (emailValue === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email (e.g., name@example.com)');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
        showError(messageInput, messageError, 'Message is required');
        return false;
    } else if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    } else {
        showSuccess(messageInput, messageError);
        return true;
    }
}

// Helper functions to show error/success
function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
    input.classList.add('success');
    input.classList.remove('error');
    errorElement.textContent = '';
}

// Real-time validation (on blur - when user leaves the field)
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

// Clear error when user starts typing again
nameInput.addEventListener('input', function() {
    if (nameInput.classList.contains('error')) {
        nameInput.classList.remove('error');
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.classList.contains('error')) {
        emailInput.classList.remove('error');
        emailError.textContent = '';
    }
});

messageInput.addEventListener('input', function() {
    if (messageInput.classList.contains('error')) {
        messageInput.classList.remove('error');
        messageError.textContent = '';
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    // If all fields are valid, show success message
    if (isNameValid && isEmailValid && isMessageValid) {
        // Hide form
        form.style.display = 'none';
        
        // Show success message
        successMessage.classList.add('show');
        
        // Optional: Reset form after 3 seconds
        setTimeout(function() {
            form.reset();
            form.style.display = 'block';
            successMessage.classList.remove('show');
            
            // Remove all success classes
            nameInput.classList.remove('success');
            emailInput.classList.remove('success');
            messageInput.classList.remove('success');
        }, 5000);
    }
});
