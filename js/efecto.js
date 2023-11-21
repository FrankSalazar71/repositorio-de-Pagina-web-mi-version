const bubbleContainer = document.querySelector('.bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const randomSize = Math.floor(Math.random() * 25) + 10;
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;

    const randomX = Math.random() * 100;
    bubble.style.left = `${randomX}%`;

    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

function adjustBubbles() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        bubbleContainer.style.display = 'none';
    } else if (screenWidth < 1024) {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            bubble.style.width = '2%';
            bubble.style.height = '2%';
        });
    } else {
        bubbleContainer.style.display = 'block';
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            bubble.style.width = '3%';
            bubble.style.height = '3%';
        });
    }
}

setInterval(createBubble, 150);

// Llama a esta función una vez al inicio para configurar las burbujas inicialmente.
adjustBubbles();

// Agrega un evento al redimensionar la ventana para ajustar las burbujas
window.addEventListener('resize', adjustBubbles);




const carruseles = document.querySelector('.carruseles');
const sliderSections = document.querySelectorAll('.slider-section');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let currentIndex = 0;

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderSections.length) % sliderSections.length;
    updateSlider();
});

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderSections.length;
    updateSlider();
});

function updateSlider() {
    sliderSections.forEach((section, index) => {
        if (index === currentIndex) {
            section.style.transform = 'translateX(0)';
        } else if (index < currentIndex) {
            section.style.transform = 'translateX(-100%)';
        } else {
            section.style.transform = 'translateX(100%)';
        }
    });
}

updateSlider();
