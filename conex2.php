<?php
$host = "mysql.inf.uct.cl";
$user = "tpenroz";
$password = "tpenroz.2024";
$database = "A2024_tpenroz";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id_pelicula = isset($_GET['id']) ? intval($_GET['id']) : 0;

$stmt = $conn->prepare("SELECT titulo, trailer, anio_lanzamiento, sinopsis, director, elenco, duracion FROM Peliculas WHERE id_pelicula = ?");
$stmt->bind_param("i", $id_pelicula);  // Vincula el parámetro
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();  // Obtén una fila
    echo json_encode($row);  // Devuelve el objeto JSON
} else {
    echo json_encode(array("error" => "No se encontraron resultados."));
}

$stmt->close();
$conn->close();
?>
