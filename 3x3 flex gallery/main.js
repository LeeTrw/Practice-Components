function toggleSize(clickedBox) {
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      if (box !== clickedBox) {
        box.classList.remove('large');
        box.classList.add('small');
      }
    });
    
    if (clickedBox.classList.contains('large')) {
      clickedBox.classList.remove('large');
      boxes.forEach(box => {
        box.classList.remove('small');
      })
    } else {
        clickedBox.classList.remove('small');
        clickedBox.classList.add('large');
      }
    };


