const carousel = document.getElementById('newsCarousel');
let scrollStep = 1; // píxeles por frame
let autoScroll;

function startAutoScroll() {
    autoScroll = setInterval(() => {
    carousel.scrollLeft += scrollStep;

    // Si llega al final, vuelve al inicio
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
    }
    }, 20); // velocidad (menor = más rápido)
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Inicia autoplay
startAutoScroll();

// Pausa cuando el usuario pasa el mouse
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

