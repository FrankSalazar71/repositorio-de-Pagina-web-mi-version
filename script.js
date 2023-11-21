/**script del boton */
const animatedButton = document.getElementById('animatedButton');


animatedButton.addEventListener('click', function() {
  alert('¡Bienvenidos al Alfonso Ugarte !');
});
/**fin */

/**el scrip de la carga de pantalla */

const loadingOverlay = document.getElementById('loadingOverlay');


window.addEventListener('load', function() {
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 6000);
});

/**fin */

/**implementación del carrusel */

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const items = document.querySelectorAll('.carousel-item');


let currentIndex = 0;


function setActiveItem(index) {
  items[currentIndex].classList.remove('active');
  items[index].classList.add('active');
}


function moveCarousel(direction) {
  if (direction === 'prev') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    container.style.transform = `translateX(-${currentIndex * carousel.offsetWidth}px)`;
    setActiveItem(currentIndex);
  } else if (direction === 'next') {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    container.style.transform = `translateX(-${currentIndex * carousel.offsetWidth}px)`;
    setActiveItem(currentIndex);
  }
}


prevBtn.addEventListener('click', () => moveCarousel('prev'));
nextBtn.addEventListener('click', () => moveCarousel('next'));


/**fin */
