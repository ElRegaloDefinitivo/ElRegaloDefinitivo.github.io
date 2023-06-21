//COMPROBAR HORA

const fechaHora = new Date();
const dia = fechaHora.getDate().toString().padStart(2, "0");
const mes = (fechaHora.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaHora.getFullYear();
const hora = fechaHora.getHours().toString().padStart(2, "0");
const minutos = fechaHora.getMinutes().toString().padStart(2, "0");

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaSemana = diasSemana[fechaHora.getDay()];

const felizLunes = document.getElementById("feliz-domingo");
felizLunes.innerHTML = `¡Feliz ${diaSemana}! Hoy es ${dia}-${mes}-${anio} y son las ${hora}:${minutos}`;



// CONTADOR


// Obtener la fecha actual y la fecha del regalo
var fechaRegalo = new Date("08-22-2023");
var fechaActual = new Date();

// Calcular la diferencia entre las fechas
var diferencia = fechaRegalo.getTime() - fechaActual.getTime();

// Calcular la cantidad de días, horas y minutos restantes
var diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
var horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

// Mostrar el contador en el banner
var contadorBanner = document.createElement("p");
contadorBanner.innerHTML = "Quedan " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos para tu regalo";
document.querySelector(".banner").appendChild(contadorBanner);

// Actualizar el contador cada segundo
setInterval(function() {
  // Obtener la fecha actual
  fechaActual = new Date();
  
  // Calcular la diferencia entre las fechas
  diferencia = fechaRegalo.getTime() - fechaActual.getTime();
  
  // Calcular la cantidad de días, horas y minutos restantes
  diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  
  // Actualizar el texto del contador
  contadorBanner.innerHTML = "Quedan " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos para tu regalo";
}, 1000);





//BARRA PROGRESO

const startDate = new Date("2023-04-20");
const endDate = new Date("2023-08-22");
const progressIndicator = document.querySelector(".progress-bar-indicator");
const progressBar = document.querySelector(".progress-bar");

function updateProgressBar() {
  const currentDate = new Date();
  const progress = (currentDate - startDate) / (endDate - startDate) * 100;
  progressBar.style.width = `${progress}%`;
  progressIndicator.textContent = `${Math.round(progress)}%`;
}

updateProgressBar();
setInterval(updateProgressBar, 1000 * 60 * 60 * 24);




































const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderInput = document.querySelector('.slider-input');
const sliderTrack = document.querySelector('.slider-track');
const sliderThumb = document.querySelector('.slider-thumb');
const sliderThumbImage = document.querySelector('.slider-thumb-image');
  
const minValue = +sliderInput.min || 0;
const maxValue = +sliderInput.max || 100;

const colorStops = [
  { r: 98, g: 173, b: 29 },
  { r: 251, g: 189, b: 30 },
  { r: 251, g: 110, b: 30 },
  { r: 231, g: 26, b: 26 },
];

const setSliderThumbImageColor = (progress) => {
  const index = (colorStops.length - 1) * progress / 100;
  const startIndex = Math.floor(index);
  const endIndex = Math.ceil(index);

  const startColor = colorStops[startIndex];
  const endColor = colorStops[endIndex];

  const percentage = index - startIndex;

  const [r, g, b] = [
    Math.round(startColor.r + (endColor.r - startColor.r) * percentage),
    Math.round(startColor.g + (endColor.g - startColor.g) * percentage),
    Math.round(startColor.b + (endColor.b - startColor.b) * percentage)
  ];

  sliderThumbImage.style.setProperty('--slider-thumb-image-color', `rgb(${r} ${g} ${b})`);
};

const updateSlider = () => {
  const progress = 100 * +sliderInput.value / (maxValue - minValue);
  sliderWrapper.style.setProperty('--slider-progress', progress);
  setSliderThumbImageColor(progress);
}

sliderInput.addEventListener('input', updateSlider);

updateSlider();

let pointerHoldingRightTimer;
let isTimerRunning = false;

const detectPointerHoldingRight = (event) => {
  const isSliderAtMax = +sliderInput.value === maxValue;
  
  const sliderRect = sliderWrapper.getBoundingClientRect();
  const pointerX = event.clientX;
  const offset = 40;
  const isPointerOnSliderRight = pointerX >= (sliderRect.right + offset);
  
  if (isSliderAtMax && isPointerOnSliderRight) {
    if (!isTimerRunning) {
      isTimerRunning = true;
      sliderThumbImage.classList.add('shake');
      pointerHoldingRightTimer = setTimeout(() => {
        sliderInput.removeEventListener('pointerdown', detectSecret);
        colorStops.push({ r: 34, g: 0, b: 0 });
        sliderWrapper.classList.add('unlocked');
        sliderThumb.addEventListener('animationend', () => {
          sliderThumb.classList.remove('play-explosion');
        });
        sliderThumb.classList.add('play-explosion');
        setSliderThumbImageColor(100);
        sliderThumbImage.classList.remove('shake');
      }, 1000); 
    }
  } else {
    clearTimeout(pointerHoldingRightTimer);
    isTimerRunning = false;
    sliderThumbImage.classList.remove('shake');
  }
};

const detectSecret = () => {
  window.addEventListener('pointermove', detectPointerHoldingRight);
  sliderInput.addEventListener('pointerup', () => {
    window.removeEventListener('pointermove', detectPointerHoldingRight);
    clearTimeout(pointerHoldingRightTimer);
    sliderThumbImage.classList.remove('shake');
  });
}

sliderInput.addEventListener('pointerdown', detectSecret);