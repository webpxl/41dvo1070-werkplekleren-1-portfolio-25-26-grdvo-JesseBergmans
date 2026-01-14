const images = document.querySelectorAll('.fotos img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});


lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

const closeBtn = document.getElementById('lightbox-close');

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});