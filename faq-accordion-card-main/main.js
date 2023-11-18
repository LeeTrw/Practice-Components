const answers = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.arrow');
let activeArrow = null;
let activeAnswer = null;

function openAnswer(index) {
    if (activeAnswer === answers[index]) {
        answers[index].classList.remove('active');
        arrows[index].classList.remove('active');
        activeAnswer = null;
        activeArrow = null;
    } else {
        if (activeAnswer !== null) {
            activeAnswer.classList.remove('active');
            activeArrow.classList.remove('active');
        }

        answers[index].classList.add('active');
        activeAnswer = answers[index];
        arrows[index].classList.add('active');
        activeArrow = arrows[index];
    }
}

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click',() => {
        openAnswer(index);
    });
});