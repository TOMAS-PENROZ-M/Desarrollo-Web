//funcion para validar los datos del registro
function validaRegistro(event){
    event.preventDefault();//previene que se envie el formulario permitiendo validar primero

    //se capturan los valores de los campos del formulario
    const nombreUsuario = document.getElementById('nombre_usuario').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const errores = [];//arreglo para almacenar los mensajes de error
    
    //expresiones regulare que validan el correo y la contraseña
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    console.log("Nombre de usuario:", nombreUsuario);
    console.log("Email:", email);
    console.log("Contraseña:", contraseña);

    //verifica si el nombre tiene almenos 3 caracteres
    if (nombreUsuario.length < 3){
        errores.push("El nombre debe contener al menos 3 caracteres");
    }

    //verifica si el email cumple con los requisitos de la expresion regular
    if (!regexEmail.test(email)){
        errores.push("Ingrese un correo electronico valido");
    }
    
    //verifica si la contraseña cumple con los requisitos de la expresion regular
    if (!regexContra.test(contraseña)){
        errores.push("La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial");
    }

    //si hay errores muestra un cuadro de error
    if (errores.length > 0) {
        console.log("Errores encontrados:", errores);//imprime los errores por consola
        alert(errores.join("\n"));//mustra una alerta con todos los mensajes de error
        return false;
    } else {
        console.log("Validación exitosa, enviando formulario...");
        event.target.submit(); 
    }
}