//COMPROBAR HORA

const fechaHora = new Date();
const dia = fechaHora.getDate().toString().padStart(2, "0");
const mes = (fechaHora.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaHora.getFullYear();
const hora = fechaHora.getHours().toString().padStart(2, "0");
const minutos = fechaHora.getMinutes().toString().padStart(2, "0");

const felizSabado = document.getElementById("feliz-lunes");
felizSabado.innerHTML = `¡Feliz lunes ${dia}! Hoy es ${dia}-${mes}-${anio} y son las ${hora}:${minutos}`;




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

const startDate = new Date("2023-04-22T00:00:00").getTime();
const endDate = new Date("2023-08-22T00:00:00").getTime();

function updateProgressBar() {
  const now = new Date().getTime();
  const percentage = Math.floor(((now - startDate) / (endDate - startDate)) * 100);

  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text");

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}%`;

  if (percentage >= 0 && percentage < 50) {
    progressBar.classList.remove("yellow");
    progressBar.classList.remove("green");
    progressBar.classList.add("red");
  } else if (percentage >= 50 && percentage < 90) {
    progressBar.classList.remove("red");
    progressBar.classList.remove("green");
    progressBar.classList.add("yellow");
  } else if (percentage >= 90) {
    progressBar.classList.remove("red");
    progressBar.classList.remove("yellow");
    progressBar.classList.add("green");
  }
}








