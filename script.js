// script.js

// Colores para los departamentos
const colores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#008000', '#800080', '#808080'];

function abrirPuerta(numeroDepartamento) {
    const departamento = document.querySelector(`.departamento:nth-child(${numeroDepartamento})`);
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    departamento.style.backgroundColor = colorAleatorio;
}
