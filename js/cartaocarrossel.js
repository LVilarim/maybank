// cartao-carousel.js
window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".cartao-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove("opacity-0");
                slide.classList.add("opacity-100");
            } else {
                slide.classList.remove("opacity-100");
                slide.classList.add("opacity-0");
            }
        });
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) currentIndex++;
        showSlide(currentIndex);
    }

    function prevSlide() {
        if (currentIndex > 0) currentIndex--;
        showSlide(currentIndex);
    }

    document.getElementById("cartaoNextBtn").addEventListener("click", nextSlide);
    document.getElementById("cartaoPrevBtn").addEventListener("click", prevSlide);

    // Inicializa o carrossel
    showSlide(currentIndex);
});

window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".cartao-slide");
    const btnPrev = document.getElementById("cartaoPrevBtn");
    const btnNext = document.getElementById("cartaoNextBtn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("opacity-100", i === index);
            slide.classList.toggle("opacity-0", i !== index);
        });

        // Atualiza os botões conforme o índice
        updateButtons();
    }

    function updateButtons() {
        // Se estiver no primeiro slide → prev escurece
        if (currentIndex === 0) {
            btnPrev.classList.remove("bg-gray-200");
            btnPrev.classList.add("bg-gray-400");
        } else {
            btnPrev.classList.remove("bg-gray-400");
            btnPrev.classList.add("bg-gray-200");
        }

        // Se estiver no último slide → next escurece
        if (currentIndex === slides.length - 1) {
            btnNext.classList.remove("bg-gray-200");
            btnNext.classList.add("bg-gray-400");
        } else {
            btnNext.classList.remove("bg-gray-400");
            btnNext.classList.add("bg-gray-200");
        }
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) currentIndex++;
        showSlide(currentIndex);
    }

    function prevSlide() {
        if (currentIndex > 0) currentIndex--;
        showSlide(currentIndex);
    }

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);

    // Inicializa
    showSlide(currentIndex);
});
