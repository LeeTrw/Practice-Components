function validateForm(event) {
    event.preventDefault();

    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    var errorImg = document.getElementById('error-img')
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email';
        emailInput.classList.add('error');
        errorImg.classList.add('error');
    } else {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
        errorImg.classList.remove('error');
        alert('Email recieved, we will keep you updated!');
    }
}