let saludoCorreo = document.getElementById('saludoCorreo');
let saludoFecha = document.getElementById('saludoFecha');
let btnAcceder = document.getElementById('btnAccederPreguntas');

saludoCorreo.innerHTML = `Hola ${localStorage.getItem("correo")}`;
saludoFecha.innerHTML = `La ultima vez que entraste fue el <br>${localStorage.getItem("fecha")}`;

btnAcceder.addEventListener('click', () => {
    window.location.href = 'pantalla3.html';
});