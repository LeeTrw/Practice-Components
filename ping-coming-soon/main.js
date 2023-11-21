function validateForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please provide a valid email address!';
        emailInput.classList.add('error');
    } else {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
        alert('Email recieved, you are subscribed and we will keep you posted.');
    }
}