document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    const showSlide = () => {
        const offset = -currentIndex * 100;
        carrusel.style.transform = `translateX(${offset}%)`;
    };

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide();
    });
});
