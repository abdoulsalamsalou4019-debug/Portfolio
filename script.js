const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 720) {
            siteNav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentImageIndex = 0;
let autoSlideInterval;

function updateCarousel(index) {
    currentImageIndex = (index + carouselImages.length) % carouselImages.length;
    carouselTrack.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        updateCarousel(currentImageIndex + 1);
    }, 2000);
}

if (carouselTrack && carouselImages.length > 0) {
    updateCarousel(0);
    startAutoSlide();

    prevButton?.addEventListener('click', () => {
        updateCarousel(currentImageIndex - 1);
        startAutoSlide();
    });

    nextButton?.addEventListener('click', () => {
        updateCarousel(currentImageIndex + 1);
        startAutoSlide();
    });
}
