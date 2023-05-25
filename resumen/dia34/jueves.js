//COMPROBAR HORA

const fechaHora = new Date();
const dia = fechaHora.getDate().toString().padStart(2, "0");
const mes = (fechaHora.getMonth() + 1).toString().padStart(2, "0");
const anio = fechaHora.getFullYear();
const hora = fechaHora.getHours().toString().padStart(2, "0");
const minutos = fechaHora.getMinutes().toString().padStart(2, "0");

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaSemana = diasSemana[fechaHora.getDay()];

const felizLunes = document.getElementById("feliz-jueves");
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





















const imageInput = document.getElementById('imageInput');
const convertBtn = document.getElementById('convertBtn');
const imageName = document.getElementById('imageName');
const conversionOptions = document.getElementById('conversionOptions');

imageInput.addEventListener('change', handleImageUpload);

function handleImageUpload() {
    const file = imageInput.files[0];
    if (file) {
        imageName.textContent = `Imagen seleccionada: ${file.name}`;
        convertBtn.disabled = false;
        conversionOptions.innerHTML = '';

        const fileExtension = getFileExtension(file.name);

        if (fileExtension === 'jpg' || fileExtension === 'jpeg') {
            conversionOptions.innerHTML = `
                <button onclick="convertTo('png')">JPG to PNG</button>
                <button onclick="convertTo('webp')">JPG to WEBP</button>
                <button onclick="convertTo('svg')">JPG to SVG</button>
            `;
        } else if (fileExtension === 'png') {
            conversionOptions.innerHTML = `
                <button onclick="convertTo('webp')">PNG to WEBP</button>
                <button onclick="convertTo('jpg')">PNG to JPG</button>
                <button onclick="convertTo('svg')">PNG to SVG</button>
            `;
        } else if (fileExtension === 'webp') {
            conversionOptions.innerHTML = `
                <button onclick="convertTo('jpg')">WEBP to JPG</button>
                <button onclick="convertTo('png')">WEBP to PNG</button>
                <button onclick="convertTo('svg')">WEBP to SVG</button>
            `;
        }
    }
}

function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function convertTo(format) {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            const link = document.createElement('a');
            link.href = result;
            link.download = `converted.${format}`;
            link.click();
        }
        reader.readAsDataURL(file);
    }
}