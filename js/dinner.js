 // Función para obtener los parámetros de la URL
 function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        img: params.get('img')
    };
}

// Obtener el parámetro de la imagen y mostrarla
const params = getQueryParams();
if (params.img) {
    const imgElement = document.createElement('img');
    imgElement.src = decodeURIComponent(params.img);
    document.querySelector('.madre').appendChild(imgElement);
}