<?php
// Conexión a la base de datos
$bd = mysqli_connect("localhost", "root", "", "desarrollo_web");

// Verificar la conexión
if (!$bd) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Recibir los datos del formulario
$nombre = $_GET["nombre"];
$correo = $_GET["correo"];
$contraseña = $_GET["contraseña"];

// Preparar la consulta SQL para llamar al procedimiento almacenado
$sql = "CALL insertar_usuario('$nombre', '$correo', '$contraseña')";

// Ejecutar la consulta
$respuesta = mysqli_query($bd, $sql);

// Verificar el resultado
if ($respuesta) {
    echo "El usuario fue insertado con éxito";
} else {
    echo "Ocurrió un error: " . mysqli_error($bd);
}

// Cerrar la conexión
mysqli_close($bd);
?>