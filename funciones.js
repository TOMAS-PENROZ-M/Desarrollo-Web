const peliimages = {
    1: ["images/alien2_escena.png","images/alien2_escena2.png"],
    2: ["images/spider-man2_escena.png","images/spider-man2_escena2.png"],
    3: ["images/halloween_escena.png","images/halloween_escena2.png",],
    4: ["images/iron-man_escena.png","images/iron-man_escena2.png"],
    5: ["images/star-wars_escena.png","images/star-wars_escena2.png"],
};

//funcion 1: mostrar escenas de las peliculas
function mostrarPreview(event, cardElement, peliId) {
    const preview = document.getElementById('preview');
    const previewImg = document.getElementById('preview-images');
    previewImg.innerHTML = '';  // Limpiar imágenes anteriores

    //recuperar la imagenes asociadas a las peliculas segun su id
    const images = peliimages[peliId];
    images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;  
        imgElement.style.width = '200px';
        imgElement.style.height = 'auto';
        previewImg.appendChild(imgElement);
    });

    //mostrar la vista previa de la pelicula
    preview.style.display = 'block';

    //Obtener las coordenadas y dimensiones del elemento tarjetA
    const cardRect = cardElement.getBoundingClientRect();
    //posisiona la vista previa a la derecha de tarjeta
    preview.style.left = `${cardRect.right + 10}px`;
    preview.style.top = `${cardRect.top}px`;

    console.log("Mostrando vista previa de las imágenes de la película ID:", peliId);
}

//funcion para ocultar la vista previa 
function ocultarPreview() {
    const preview = document.getElementById('preview');
    preview.style.display = 'none';  
    console.log('Vista previa oculta');
}

//funcion 2: cambiar el color de la tarjeta
function colorTarjeta(event, color) {
    //se usa 'this' para referirse a la tarjeta que disparo el evento
    console.log('Cambiando el color de la tarjeta:', this);
    this.style.backgroundColor = color;
}
//funcion para devolver la tarjeta a su color original
function restaurarColor(event) {
    //se usa 'this' para referirse a la tarjeta que disparo el evento
    this.style.backgroundColor = '#2e2e2e';  // Color original
    console.log("Color restaurado al original");
}

// Seleccionar las tarjetas y agregar los eventos
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    //se agrega el evento mouseenter para cuando el mouse entra a la tarjeta 
    card.addEventListener('mouseenter', function(event) {
        const peliId = this.getAttribute('href').split('=')[1];  
        mostrarPreview(event, this, peliId);
        colorTarjeta.call(this, event, '#202020');
    });
    
    //se agrega el evento mouseenter para cuando el mouse sale a la tarjeta 
    card.addEventListener('mouseleave', function(event) {
        ocultarPreview();//se llama la funcion para ocultar la vista previa
        restaurarColor.call(this, event);//se llama la funcion para devolver el color original a la tarjeta
    });
});
