<?php

$host = "mysql.inf.uct.cl";
$user = "tpenroz";
$password = "tpenroz.2024";
$database = "A2024_tpenroz";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST['nombre_usuario'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $tipo_usuario = 'registrado';

    $sql = "INSERT INTO Usuarios (nombre_usuario, email, contraseña, tipo_usuario) VALUES ('$nombre_usuario', '$email', '$contraseña', '$tipo_usuario')";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente.<br><br>";
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }

    $sql = "SELECT * FROM Usuarios";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h2>Registros:</h2>";
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Nombre de usuario</th>
                    <th>Correo</th>
                    <th>Fecha de registro</th>
                    <th>Tipo de usuario</th>
                </tr>";

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
    }
}

$conn->close();
?>