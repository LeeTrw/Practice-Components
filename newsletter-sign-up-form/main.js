const container = document.querySelector('.container');
const thanks = document.querySelector('.thanks');

function validateEmail(event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const userEmail = document.getElementById('user-email');

    if (!emailPattern.test(email.value)){
        email.classList.add('error');
        errorMessage.innerHTML = 'Valid Email Required';
    } else {
        email.classList.remove('error');
        errorMessage.innerHTML = '';
        container.style.display = 'none';
        thanks.style.display = 'flex';
        userEmail.innerHTML = email.value;
    }
}

function dismiss(event) {
    thanks.style.display = 'none';
    container.style.display = 'flex';
}

