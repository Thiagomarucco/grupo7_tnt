let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("Resultados de busqueda");
console.log(buscar)
let radio = queryObj.get("type");

let urlpelis = `https://api.themoviedb.org/3/search/movie?api_key=baa0951159508b20d0796a6a16699e51&query=${buscar}`;
let urlseries = `https://api.themoviedb.org/3/search/tv?api_key=baa0951159508b20d0796a6a16699e51&query=${buscar}`;

if (radio == "movie") {
    fetch(urlpelis)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
    let captura = document.querySelector(".cajaSection");
    let peliculas = "";
    for (let i = 0; i < data.results.length; i++) {
        let pelicula = data.results[i];
        peliculas += `
            <div class="cajaArticle"> 
                <a href="./detail-movie.html?id=${pelicula.id}">
                    <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                </a>
                <h3>${pelicula.title}</h3>
                <p>Fecha de estreno</p>
                <p>${pelicula.release_date}</p>
            </div>
        `;
    }
    captura.innerHTML = peliculas;
    let titulo = document.querySelector(".tituloSection");
    titulo.innerText = `Resultados de búsqueda para: ${buscar}`;
    if (data.results.length === 0) {
        captura.innerHTML = `<p>No se encontraron resultados para "${buscar}".</p>`;
    }
    })
    .catch(function(error) {
    console.log("Error: " + error);
})
} else if (radio == "tv"){
    fetch(urlseries)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
    let captura = document.querySelector(".cajaSection");
    let peliculas = "";
    for (let i = 0; i < data.results.length; i++) {
        let pelicula = data.results[i];
        peliculas += `
            <div class="cajaArticle"> 
                <a href="./detail-movie.html?id=${pelicula.id}">
                    <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                </a>
                <h3>${pelicula.title}</h3>
                <p>Fecha de estreno</p>
                <p>${pelicula.release_date}</p>
            </div>
        `;
    }
    captura.innerHTML = peliculas;
    let titulo = document.querySelector(".tituloSection");
    titulo.innerText = `Resultados de búsqueda para: ${buscar}`;
    if (data.results.length === 0) {
        captura.innerHTML = `<p>No se encontraron resultados para "${buscar}".</p>`;
    }
    })
    .catch(function(error) {
    console.log("Error: " + error);
})
}