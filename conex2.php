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

// obtiene el id de la pelicula desde la url a través del parámetro id
// si no se recibe un id valido, se establece en 0
$id_pelicula = isset($_GET['id']) ? intval($_GET['id']) : 0;

//se prepara una consulta y vincula el valor del parámetro $id_pelicula al marcador de posición (?) de la consulta
$stmt = $conn->prepare("SELECT titulo, trailer, anio_lanzamiento, sinopsis, director, elenco, duracion FROM Peliculas WHERE id_pelicula = ?");
$stmt->bind_param("i", $id_pelicula);  
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {//verifica si hay resultados
    $row = $result->fetch_assoc();// Si se encontraron resultados, obtiene la primera fila como un array asociativo
    echo json_encode($row);  // Devuelve el objeto JSON
} else {
    echo json_encode(array("error" => "No se encontraron resultados."));
}

$stmt->close();
$conn->close();
?>
