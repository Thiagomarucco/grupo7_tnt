let query = location.search;
let queryData = new URLSearchParams(query);
let id = queryData.get("id");


let urlDetalle = `https://api.themoviedb.org/3/tv/${id}?api_key=baa0951159508b20d0796a6a16699e51`;


fetch(urlDetalle)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(data) {
   
    document.querySelector(".tituloPeli").innerText = data.name;
    document.querySelector(".rating").innerText = "Rating: " + data.vote_average + "/10";
    document.querySelector(".estreno").innerText = "Estreno: " + data.first_air_date;
    document.querySelector(".duracion").innerText = "Duracion: " + data.episode_run_time[0] + " minutos por capitulo";
    document.querySelector(".sinopsis").innerText = "Sinopsis: " + data.overview;
    document.querySelector(".generoPeli").innerText = "Genero: " + data.genres[0].name;
    document.querySelector(".fotoDetalle").src = "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });