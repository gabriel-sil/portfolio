let currentIndex = 0;
const images = document.querySelectorAll('.education-image');

function showImage(index) {
    currentIndex = index - 1;
    updateImages();
}

function updateImages() {
    images.forEach((image, i) => {
        if (i === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
}

// Dentro da função showImage(index):
function showImage(index) {
    currentIndex = index - 1;
    updateImages();

    // Remova a classe "active" de todos os elementos da lista
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => item.classList.remove('active'));

    // Adicione a classe "active" ao item clicado
    listItems[currentIndex].classList.add('active');
}

/* EU ACHO QUE POSSO APAGAR ESTA PARTE DE BAIXO (CONFIRMAR)*/
function showDescription(index) {
    // Oculta todos os elementos .description-slide
    var descriptionSlides = document.querySelectorAll('.description-slide');
    descriptionSlides.forEach(function(slide) {
        slide.classList.remove('active');
    });

    // Exibe o elemento .description-slide correspondente ao índice fornecido
    var selectedSlide = document.querySelector('.description-slide:nth-child(' + index + ')');
    selectedSlide.classList.add('active');
}