# Ping Coming Soon Page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

This is a stand alone coming soon webpage for a trading company called Ping. It features
a form with an email input where a user could provide their email to subscribe and be kept
up to date with the company. The form should warn users if the field is empty and 
show an error message if the email format is incorrect. It was built using 
HTML, CSS and JavaScript.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*


### Screenshot


![A raw view of the webpage.](images/screenshots/screenshot1.jpg)
![Hover states and error message active.](images/screenshots/screenshot2.jpg)
![A raw tablet view.](images/screenshots/screenshot3.jpg)
![A raw mobile view.](images/screenshots/screenshot4.jpg.jpg)


### Built with

- HTML5
- CSS
- Flexbox
- JavaScript


### What I learned

This project helped me practice form validation functions again. I used the JavaScript 
function below to check a users input with a regex pattern check. The function 
then adds text to a HTML element to display an error state and stop 
the user from submitting the incorrectly formatted email.

```js
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
```

## Author
- Lee Trewhitt
- Website - https://leetrw.github.io/