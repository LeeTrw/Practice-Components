const ratingOptions = document.querySelectorAll('.num');
const submitButton = document.getElementById('submit');

let selectedRating = 0;

ratingOptions.forEach(option => {
    option.addEventListener('click', () => {
        selectedRating = parseInt(option.getAttribute('data-rating'));
        ratingOptions.forEach(opt => opt.classList.remove('selected'));
        ratingOptions.forEach(opt => opt.classList.add('num'));
        option.classList.add('selected');
        option.classList.remove('num');
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating) {
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById('selected-rating').textContent = selectedRating;
 }
});