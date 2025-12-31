const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMsg').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
    }
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }
    if (isValid) {
        document.getElementById('successMsg').textContent = 'Form submitted successfully!';
        form.reset();
    }
});
