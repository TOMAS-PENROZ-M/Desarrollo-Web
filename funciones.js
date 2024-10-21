function colorTarjeta(event, color){
    console.log('cambiando el color de la tarjeta:', this);
    this.style.backgroundColor = color;
}

function restaurarColor(event){
    this.style.backgroundColor = '#2e2e2e'; // Color original
    console.log("Color restaurado al original");
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function(event) {
        colorTarjeta.call(this, event, '#202020');
    });

    card.addEventListener('mouseleave', restaurarColor);
});