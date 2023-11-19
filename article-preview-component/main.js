const toggleCon = document.querySelector('.toggle-con');
const arrow = document.getElementById('arrow');

function show() {
  toggleCon.classList.toggle('active');
  arrow.parentElement.classList.toggle('active');
  

  // Set the position of '.toggle-con' based on the position of 'arrow'
  if (toggleCon.classList.contains('active')) {
    const arrowRect = arrow.getBoundingClientRect();
    toggleCon.style.top = arrowRect.top - toggleCon.offsetHeight - 10 + 'px';
    toggleCon.style.left = arrowRect.left + 'px';
  }
}
