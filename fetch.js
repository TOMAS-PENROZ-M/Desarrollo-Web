//obtiene los parametros de la url utilizando la clase URLSearchParams
const params = new URLSearchParams(window.location.search);
const id = params.get('id');//obtiene los valores de los parametros id de la url
const conex = `conex2.php?id=${id}`;//se crea la url de conexion incluyendo el ID como parámetro en la solicitud a conex2.php

fetch(conex)//se realiza la solicitud http
    .then(response => response.json())//convierte la respuesta a json
    .then(data =>{
        if (data.error){
            document.getElementById('titulo').innerText = data.error;
        } else {
            // Si no hay error, llenar los elementos html con la informacion de la pelicula
            document.getElementById('titulo').innerText = data.titulo;
            document.getElementById('sinopsis').innerText = data.sinopsis;
            document.getElementById('director').innerText = data.director;
            document.getElementById('elenco').innerText = data.elenco;
            document.getElementById('anio').innerText = data.anio_lanzamiento;
            document.getElementById('duracion').innerText = `${data.duracion} minutos`;
            document.getElementById('trailer').src = data.trailer;
        }
    })
    .catch(error => console.error('Error al obtener los detalles: ', error));