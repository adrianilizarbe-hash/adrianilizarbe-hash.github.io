// Contadores para los botones "No"
let contadorNo1 = 0;
let contadorNo2 = 0;

// Seleccionamos todos los botones
const botonSi1 = document.getElementById('si1');
const botonNo1 = document.getElementById('no1');
const botonSi2 = document.getElementById('si2');
const botonNo2 = document.getElementById('no2');
const botonSi3 = document.getElementById('si3');
const botonNo3 = document.getElementById('no3');

// Seleccionamos los elementos de las preguntas y mensajes
const pregunta1 = document.getElementById('pregunta1');
const pregunta2 = document.getElementById('pregunta2');
const pregunta3 = document.getElementById('pregunta3');
const mensajeFinal = document.getElementById('mensaje-final');
const mensajeNoRegalo = document.getElementById('mensaje-no-regalo');

// Seleccionamos las pistas de audio
const musicaPreguntas = document.getElementById('musica-preguntas');
const musicaSorpresa = document.getElementById('musica-sorpresa');

// Lógica para el botón "Sí" de la primera pregunta
botonSi1.addEventListener('click', function() {
  pregunta1.style.display = 'none';
  pregunta2.style.display = 'block';
});

// Lógica para el botón "No" de la primera pregunta
botonNo1.addEventListener('click', function() {
  contadorNo1++;
  const nuevoTamano = 16 + contadorNo1 * 2;
  botonNo1.style.fontSize = nuevoTamano + 'px';
  if (contadorNo1 >= 60) {
    botonNo1.style.fontSize = '16px';
    contadorNo1 = 0;
  }
  musicaPreguntas.play();
});
// Lógica para el botón "Sí" de la segunda pregunta
botonSi2.addEventListener('click', function() {
  pregunta2.style.display = 'none';
  pregunta3.style.display = 'block';
});
// Lógica para el botón "No" de la segunda pregunta
botonNo2.addEventListener('click', function() {
  contadorNo2++;
  const nuevoTamano = 16 + contadorNo2 * 2;
  botonNo2.style.fontSize = nuevoTamano + 'px';
  if (contadorNo2 >= 60) {
    botonNo2.style.fontSize = '16px';
    contadorNo2 = 0;
  }
});
// Agrega esta función al final de tu script.js, fuera de cualquier otro addEventListener
function generateConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  
  for (let i = 0; i < 100; i++) { // Generamos 100 piezas de confeti
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confettiContainer.appendChild(confetti);
  }
}
// Lógica para el botón "Sí" de la tercera pregunta
botonSi3.addEventListener('click', function() {
  pregunta3.style.display = 'none';
  mensajeFinal.style.display = 'block';
  musicaPreguntas.pause();
  musicaSorpresa.play();
  generateConfetti(); // ¡Aquí se llama a la función!
});
// Lógica para el botón "No" de la tercera pregunta
botonNo3.addEventListener('click', function() {
  pregunta3.style.display = 'none';
  mensajeNoRegalo.style.display = 'block';
});
