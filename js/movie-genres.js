let urlMgenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=baa0951159508b20d0796a6a16699e51`;

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
      <img src="">
        <h3 class="nombregenero">
          <a href="./detail-genres.html?id=${element.id}"> ${element.name}</a>
        </h3>
      </article>`;
  }
  // faltan las imagenes //
  captura.innerHTML = generos;
  let stilos = document.querySelector(".cajaArticle")
  stilos.style.width = "230px";
  let stisec = document.querySelector(".cajaSection");
  stisec.style.display = "flex";
  stisec.style.flexWrap = "wrap";
  stisec.style.justifyContent = "spaceevenly";
  stisec.style.padding = "15px";
})
.catch(function(error) {
  console.log("Error: " + error);
});