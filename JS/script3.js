let campoPregunta = document.getElementById('pregunta');
let radioVerdadero = document.getElementById('verdadero');
let radioFalso = document.getElementById('falso');
let campoPuntuacion = document.getElementById('puntuacion');
let tabla = document.getElementById('tablaRespuestas');
let btnAtras = document.getElementById('btnAtras');
let btnGrabar = document.getElementById('btnGrabar');
let errorPuntuacion = document.getElementById('errorPuntuacion');
let radioSeleccionado = document.querySelector('input[name="respuesta"]:checked');
errorPuntuacion.style.display = 'none';
let respuestaVoF;



//indicamos que solo pueda contener digitos del 1 al 9
campoPuntuacion.addEventListener('blur', () => {
    if(!(!isNaN(campoPuntuacion.value) && campoPuntuacion.value.length == 1)){
        errorPuntuacion.innerHTML = 'Solo puede contener un número del 1 al 9';
        errorPuntuacion.style.display = 'block';
    }else{
        errorPuntuacion.style.display = 'none';
    }

    console.log(radioVerdadero.checked);
})



function validar(){

    if(radioVerdadero.checked == true){
        respuestaVoF = 'Verdadero';
    }else if(radioFalso.checked == true){
        respuestaVoF = 'Falso';
    }

    if(!isNaN(campoPuntuacion.value) && campoPuntuacion.value.length == 1){
        if(radioVerdadero.checked == true || radioFalso.checked == true){
            if(campoPregunta.value.length > 0){
                return true;
            }
        }
    }
    return false;
}

btnAtras.addEventListener('click', () => {
    window.location.href = 'pantalla2.html';
});

btnGrabar.addEventListener('click', () => {
    if(validar() == true){
        let pregunta = campoPregunta.value;
        let respuesta = respuestaVoF;
        let puntuacion = campoPuntuacion.value;
        let estado = campoPuntuacion.value;
        let fila = document.createElement('tr'); 

        let tdPregunta = document.createElement('td');
        tdPregunta.textContent = nombre;
        
        let tdRespuesta = document.createElement('td');
        tdRespuesta.textContent = edad;
        
        let tdPuntuacion = document.createElement('td');
        tdPuntuacion.textContent = pais;
        
        let tdEstado = document.createElement('td');
        tdEstado.textContent = pais
        
        fila.appendChild(tdPregunta);
        
        fila.appendChild(tdRespuesta);
        
        fila.appendChild(tdPuntuacion);
        
        fila.appendChild(tdEstado);
        
        tabla.appendChild(fila);

    }
});




