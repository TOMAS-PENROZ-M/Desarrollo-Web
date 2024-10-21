const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const conex = `conex2.php?id=${id}`;

fetch(conex)
    .then(response => response.json())
    .then(data =>{
        if (data.error){
            document.getElementById('titulo').innerText = data.error;
        } else {
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