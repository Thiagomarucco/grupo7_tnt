let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let generoId = urlParams.get('id');

const apiKey = "baa0951159508b20d0796a6a16699e51";
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${generoId}`;

let cajaSection = document.querySelector(".cajaSection");
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let peliculas = "";
        for (let index = 0; index < data.results.length; index++) {
            let pelicula = data.results[index];
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
        cajaSection.innerHTML = peliculas;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

