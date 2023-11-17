# Article Preview Component

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

This is a stand alone coming soon webpage for a clothing company. It features
a form with an email input where a user could provide their email to recieve 
updates from the store. The form should warn users if the field is empty and 
show an error message if the email format is incorrect. It was built using 
HTML, CSS and JavaScript.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Screenshot

![A raw view of the webpage.](images/screenshots/screenshot1.jpg)
![Hover states active.](images/screenshots/screenshot2.jpg)
![A view of the error message.](images/screenshots/screenshot3.jpg)
![A raw tablet view.](images/screenshots/screenshot4.jpg)
![A raw mobile view.](images/screenshots/screenshot5.jpg)


### Built with

- Semantic HTML5 markup
- CSS / CSS variables
- Flexbox
- JavaScript


### What I learned

During this project I learnt about form validation functions. I used the JavaScript 
function below to check a users input with a regex pattern check. The function 
then changes some CSS styles to show an error message, a warning symbol and stop 
the user from submitting the incorrectly formatted email.

```js
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
```

## Author
- Lee Trewhitt
- Website - https://leetrw.github.io/
