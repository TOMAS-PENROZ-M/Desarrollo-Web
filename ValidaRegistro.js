function validaRegistro(event){
    event.preventDefault();

    const nombreUsuario = document.getElementById('nombre_usuario').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const errores = [];
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    console.log("Nombre de usuario:", nombreUsuario);
    console.log("Email:", email);
    console.log("Contraseña:", contraseña);

    if (nombreUsuario.length < 3){
        errores.push("El nombre debe contener al menos 3 caracteres");
    }

    if (!regexEmail.test(email)){
        errores.push("Ingrese un correo electronico valido");
    }
    
    if (!regexContra.test(contraseña)){
        errores.push("La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial");
    }

    if (errores.length > 0) {
        console.log("Errores encontrados:", errores);
        alert(errores.join("\n"));
        return false;
    } else {
        console.log("Validación exitosa, enviando formulario...");
        event.target.submit(); 
    }
}