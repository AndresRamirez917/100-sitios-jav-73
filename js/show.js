 // Función para obtener los parámetros de la URL
 function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        img: params.get('img')
    };
}

// Obtener el parámetro de la imagen y mostrarla
const params = getQueryParams();
let imgUrl = params.img ? decodeURIComponent(params.img) : localStorage.getItem('savedImage');

if (imgUrl) {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.querySelector('.madre').appendChild(imgElement);
}