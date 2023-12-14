# Clock

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

This is a simple JavaScript powered clock that updates every second. The time 
should be accurate for where ever the application is opened. 


### The challenge

Users should be able to: 

- View the current time
- See the clock update every second


### Screenshot

![A raw view of the clock.](/screenshot1.png)


### Built with

- HTML5
- CSS
- JavaScript


### What I learned

The main difficulty with this project was making sure the hands were pointing 
in the correct direction with the time. The function below works out how many 
degrees the hands should have turned depending on the time. All of the degree
calculations add 90 degrees at the end to account for the fact that the divs (hands)
will point horizontally at their base position. Last i used set interval to make sure 
the function ran and updated the clock every second.

```js
 function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
```

## Author
- Lee Trewhitt
- Website - https://leetrw.github.io/


