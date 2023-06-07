//COMPROBAR HORA

const fechaHora = new Date();
const dia = fechaHora.getDate().toString().padStart(2, "0");
const mes = (fechaHora.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaHora.getFullYear();
const hora = fechaHora.getHours().toString().padStart(2, "0");
const minutos = fechaHora.getMinutes().toString().padStart(2, "0");

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaSemana = diasSemana[fechaHora.getDay()];

const felizLunes = document.getElementById("feliz-viernes");
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
setInterval(function () {
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
















function respuestaSi() {
	document.getElementById('pregunta1').style.display = 'none';
	document.getElementById('pregunta2').style.display = 'block';
}

function respuestaPuesClaro() {
	document.getElementById('pregunta2').style.display = 'none';
	document.getElementById('pregunta3').style.display = 'block';
}

function respuestaSi2() {
	document.getElementById('pregunta3').style.display = 'none';
	document.getElementById('pregunta4').style.display = 'block';
}

function respuestaSi3() {
	document.getElementById('pregunta4').style.display = 'none';
	document.getElementById('pregunta5').style.display = 'block';
}

function respuestaSi4() {
	document.getElementById('pregunta5').style.display = 'none';
	document.getElementById('pregunta6').style.display = 'block';
}