document.addEventListener('DOMContentLoaded', function () {
    // Referencia al campo de búsqueda y a los botones
    const inputBusqueda = document.getElementById('search-input');
    const botonesVet = document.querySelectorAll('.Vet-locations button');

    // Evento: Ejecutar el filtro al escribir en el campo de búsqueda
    inputBusqueda.addEventListener('input', filtroVetLocalidad);

    /**
     * Función que filtra los botones según el texto ingresado
     */
    function filtroVetLocalidad() {
        const texto = inputBusqueda.value.trim().toLowerCase(); // Texto de búsqueda
        if (texto === "") {
            // Si el campo está vacío, muestra todos los botones
            botonesVet.forEach(boton => boton.style.display = '');
            return;
        }

        // Iterar sobre los botones y filtrar según el texto
        botonesVet.forEach(boton => {
            const localidad = boton.getAttribute('data-localidad').toLowerCase();
            // Mostrar solo los botones que coincidan con el texto
            if (localidad.includes(texto)) {
                boton.style.display = '';
            } else {
                boton.style.display = 'none';
            }
        });
    }
});
