document.addEventListener('DOMContentLoaded', function () {
    fetch('/libros')
        .then(res => res.json())
        .then(libros => {
            const agendasContainer = document.getElementById('agendas-container');
            libros.forEach(product => {
                if (product.stock > 0) {
                    const agendaCard = document.createElement('div');
                    agendaCard.classList.add('agenda-card');
                    agendaCard.innerHTML = `
                        <h3 class="titulo">${libro.titlulo}</h3>
                        <p class="descripcion">${libro.reseña}</p>
                        <img src="/uploads/${libro.tapa}" alt="Thumbnail" class="agenda">
                        <p class="precio">Autor: $ ${libro.id_autor}</p>
                    `;
                    agendasContainer.appendChild(agendaCard);
                }
            });
        })
        .catch(error => console.error('Error al obtener las agendas:', error));
});