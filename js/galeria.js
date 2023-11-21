function enlargeImage(imageSrc, caption) {
    var enlargedImage = document.getElementById("enlargedImage");
    var enlargedImg = document.getElementById("enlargedImg");
    var imageCaption = document.getElementById("imageCaption");

    enlargedImg.src = imageSrc;
    imageCaption.innerHTML = caption;
    enlargedImage.style.display = "block";

    enlargedImage.onclick = function() {
        enlargedImage.style.display = "none";
    };
}



/* script del carrusel*/
// Configura la velocidad de cambio (en milisegundos)
const autoSlideInterval = 3000; // Cambiar cada 3 segundos

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Configura el intervalo automático
setInterval(nextSlide, autoSlideInterval);

// Controladores de botones
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

// Muestra la primera diapositiva al cargar la página
showSlide(0);
