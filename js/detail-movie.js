let query = location.search;
let queryData = new URLSearchParams(query);
let id = queryData.get("id");


let urlDetalle = `https://api.themoviedb.org/3/movie/${id}?api_key=baa0951159508b20d0796a6a16699e51`;


fetch(urlDetalle)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(data) {
    
    document.querySelector(".tituloPeli").innerText = data.title;
    document.querySelector(".rating").innerText = "Rating: " + data.vote_average + "/10";
    document.querySelector(".estreno").innerText = "Estreno: " + data.release_date;
    document.querySelector(".duracion").innerText = "Duración: " + data.runtime + " minutos";
    document.querySelector(".sinopsis").innerText = "Sinopsis: " + data.overview;
    document.querySelector(".fotoDetalle").src = "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
    
    let generoLinks = "";

    for (let i = 0; i < data.genres.length; i++) {
      let genero = data.genres[i];
      generoLinks += `<a href="detail-genres-movies.html?id=${genero.id}" class="genero-link">${genero.name}</a> `;
    }

    document.querySelector(".generoPeli").innerHTML = "Género: " + generoLinks;

  let links = document.querySelectorAll(".genero-link");
  for (let i = 0; i < links.length; i++) {
    links[i].style.textDecoration = "none";
    links[i].style.margin = "10px";
  }
  })

  .catch(function(error) {
    console.log("Error: " + error);
  });
