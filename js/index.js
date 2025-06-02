const apiKey = "baa0951159508b20d0796a6a16699e51";
let cajaSection = document.querySelectorAll(".cajaSection");
let cajaPeli = cajaSection[0];
let cajaSerie = cajaSection[1];
let cajaSeriesPopulares = cajaSection[2];

let urlPelis = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

fetch(urlPelis)
    .then(function(response) {
    return response.json()

    })
    .then(function(data) {
    let peliculas = "";
    for (let index = 0; index < 5; index++) {
        let pelicula = data.results[index];
        peliculas += `
            <div class="cajaArticle">
                <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                <h3>${pelicula.title}</h3>
                <p>Fecha de estreno</p>
                <p>${pelicula.release_date}</p>
            </div>
        `;
    
    }
    cajaPeli.innerHTML = peliculas;
    })
        
    .catch(function(error) {
    console.log("Error: " + error);
})

fetch(urlSeries)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let series = "";
        for (let index = 0; index < 5; index++) {
            let serie = data.results[index];
            series += `
                <div class="cajaArticle">
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}">
                    <h3>${serie.name}</h3>
                    <p>Fecha de estreno</p>
                    <p>${serie.first_air_date}</p>
                </div>
            `;
        }
        cajaSerie.innerHTML = series;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

fetch(urlSeriesPopulares)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let seriesPopulares = "";
        for (let index = 0; index < 5; index++) {
            let serie = data.results[index];
            seriesPopulares += `
                 <div class="cajaArticle">
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}">
                    <h3>${serie.name}</h3>
                    <p>Fecha de estreno</p>
                    <p>${serie.first_air_date}</p>
                </div>
            `;
        }
        cajaSeriesPopulares.innerHTML = seriesPopulares;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
