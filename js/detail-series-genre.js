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
        let series = "";
        for (let index = 0; index < data.results.length; index++) {
            let serie = data.results[index];
            series += `
                <div class="cajaArticle">
                    <a href= "./detail-serie.html?id=${serie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}">
                    <a/>
                    <h3>${serie.title}</h3>
                    <p>Fecha de estreno</p>
                    <p>${serie.release_date}</p>
                </div>
            `;
        }
        cajaSection.innerHTML = series;
    
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

