<?php
//configura la conexion con la base de datos
$host = "mysql.inf.uct.cl";
$user = "tpenroz";
$password = "tpenroz.2024";
$database = "A2024_tpenroz";

//se crea la conexion
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

//verifica si hay una solicitud http de tipo post
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //se capturan los datos enviados desde el formulario
    $nombre_usuario = $_POST['nombre_usuario'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $tipo_usuario = 'registrado';

    //se crea la consulta para insertar un usuario
    $sql = "INSERT INTO Usuarios (nombre_usuario, email, contraseña, tipo_usuario) VALUES ('$nombre_usuario', '$email', '$contraseña', '$tipo_usuario')";

    if ($conn->query($sql) === TRUE) {
        //el usuario es redirigido a la pagina de inicio de sesion
        header("Location: index.html");
        exit();
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }
/*Comentado pues ya no se ocupara
    $sql = "SELECT * FROM Usuarios";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //mostrar los registros en una tabla html
        echo "<h2>Registros:</h2>";
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Nombre de usuario</th>
                    <th>Correo</th>
                    <th>Fecha de registro</th>
                    <th>Tipo de usuario</th>
                </tr>";
        //recorre  los resultados y muestra cada registro en una fila de la tabla
        while($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $row["id_usuario"] . "</td>
                    <td>" . $row["nombre_usuario"] . "</td>
                    <td>" . $row["email"] . "</td>
                    <td>" . $row["fecha_registro"] . "</td>
                    <td>" . $row["tipo_usuario"] . "</td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "No hay registros.";
    }*/
}

$conn->close();
?>