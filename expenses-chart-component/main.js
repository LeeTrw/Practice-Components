 
  fetch ('data.json')
    .then(response => response.json())
    .then(data => {

        //HTML elements
        const daySpend = document.getElementsByClassName('day-spend');
        const days = document.getElementsByClassName('bar');

        //JSON data
        const amount = data.map(item => item.amount);

        if (amount) {
            for (let i = 0; i < days.length; i++) {
                days[i].style.height = amount[i] * 2 + 'px';
                daySpend[i].innerHTML = amount[i]; 
        }
        } else {
            console.log('error');
        }
    }) 

        const daySpend = document.querySelectorAll('.day-spend');
        const days = document.querySelectorAll('.day');

        days.forEach((day, index) => {
            day.addEventListener('mouseenter', () => {
            daySpend[index].style.display = 'block'; 
        });

        day.addEventListener('mouseleave', () => {
            daySpend[index].style.display = 'none';
          });
        });

        const bars = document.querySelectorAll('.bar');
        const date = new Date();
        let today = date.getDay(); 

        bars.forEach((bar, index) => {
            if (today == 0) {
                today = 7;
            } else {
                today = today;
            }

            if ((index + 1) == today) {
                bar.classList.add('today');
            }
        });
        

    