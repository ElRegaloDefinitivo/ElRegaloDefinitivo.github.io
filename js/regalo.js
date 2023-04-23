const img = document.getElementById('tick-img');
let animationInterval;

// Función para animar la imagen al poner el cursor encima
function startAnimation() {
  let degree = 5;
  let direction = 1;
  animationInterval = setInterval(() => {
    img.style.transform = `rotate(${degree * direction}deg) translateX(${5 * direction}px)`;
    direction = direction === 1 ? -1 : 1;
  }, 100);
}

// Función para detener la animación al quitar el cursor
function stopAnimation() {
  clearInterval(animationInterval);
  img.style.transform = 'rotate(0deg) translateX(0px)';
}

// Función para hacer zoom en la imagen al hacer click y redirigir a lunes.html
function zoomImg() {
  img.style.transition = 'transform 3.5s ease';
  img.style.transform = 'scale(2.5)';
  img.style.width = '700px';
  img.style.height = '700px';
  setTimeout(() => {
    window.location.href = '../semana/lunes/lunes.html';
  }, 1000);
}

// Añadir los eventos de animación y click a la imagen
img.addEventListener('mouseover', startAnimation);
img.addEventListener('mouseout', stopAnimation);
img.addEventListener('click', zoomImg);


