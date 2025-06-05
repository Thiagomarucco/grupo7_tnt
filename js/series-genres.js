let urlMgenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=baa0951159508b20d0796a6a16699e51`;

fetch(urlMgenres)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let res = data.genres;
  let captura = document.querySelector(".cajaSection");
  let generos = "";
  for (let i = 0; i < res.length; i++) {
    const element = res[i];
    generos += `
      <article class="cajaArticle">
        <h3 class="nombreGenero">
          <a href="./detail-genres-series.html?id=${element.id}"> ${element.name}</a>
        </h3>
      </article>`;
  }
  captura.innerHTML = generos;
  let stilos = document.querySelector(".cajaArticle")
  stilos.style.width = "230px";
  let stisec = document.querySelector(".cajaSection");
  stisec.style.display = "flex";
  stisec.style.flexWrap = "wrap";
  stisec.style.justifyContent = "space-evenly";
  stisec.style.padding = "15px";
  
  let nombresGenero = document.querySelectorAll(".nombreGenero");
  for (let i = 0; i < nombresGenero.length; i++) {
    nombresGenero[i].style.border = "2px solid black";
    nombresGenero[i].style.padding = "10px";
    nombresGenero[i].style.backgroundColor = "#5a90ed";
    nombresGenero[i].style.margin = "10px";
  }
})
.catch(function(error) {
  console.log("Error: " + error);
});