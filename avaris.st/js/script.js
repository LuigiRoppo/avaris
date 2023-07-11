// console.log("el script1 está activo");


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('img');
  let activeIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    activeIndex++;
    if (activeIndex >= images.length) {
      activeIndex = 0;
    } 
    showImage(activeIndex);
  }

  setInterval(nextImage, 5000); // Cambia a la siguiente imagen cada 3 segundos
  showImage(activeIndex); // Muestra la primera imagen inicialmente
});
