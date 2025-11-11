let pBienvenida = document.getElementById('bienvenida');
let divUsuario = document.querySelectorAll('div.correo');
let boton = document.getElementById('btnEnviar');
let campoUsuario;
let pError = document.getElementById('error');
let correo;
let fecha;

divUsuario.forEach(element => {
    element.style.display = 'none';
});


document.addEventListener('keydown', function(event) {
    if(event.code === 'ControlLeft'){
        divUsuario.forEach(element => {
            element.style.display = 'block';
        });
        pBienvenida.style.display = 'none';
    }
});

function validarCorreo(correo){
    return correo.includes('@');
}

boton.addEventListener('click', () => {
    campoUsuario = document.getElementById('campoUsuario').value;
    console.log(campoUsuario);
    console.log(validarCorreo(campoUsuario));
    if(validarCorreo(campoUsuario)){
        console.log('entra if');
        correo = campoUsuario;
        fecha = new Date();
        console.log(correo);
        console.log(fecha);
        localStorage.setItem("correo", correo);
        localStorage.setItem("fecha", fecha);
        window.location.href = 'pantalla2.html';
    }else{
        pError.innerHTML = 'El correo debe contener @';
        console.log('no entra if');
    }
});

campoUsuario = document.getElementById('campoUsuario');
campoUsuario.addEventListener('blur', () => {
    campoUsuario = document.getElementById('campoUsuario').value;
    if((campoUsuario.includes('@'))){
        pError.innerHTML = '';
    }else{
        pError.innerHTML = 'El correo debe contener @';
    }
});

setTimeout(() => {

    divUsuario.forEach(element => {
        element.style.display = 'block';
    });
    pBienvenida.style.display = 'none';
}, 5000);