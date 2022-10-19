const container = document.getElementById('demo')

async function getFilmes() {
  try {
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
    const dados = await resposta.json()

    dados.forEach((filme) => {
        container.innerHTML += 
        `<div class="cards">
            <h1 class="titulo">${filme.title}</h1>
            <h2 class="titulo-original">${filme.original_title}</h2>
            <h2 class="titulo-original">${filme.original_title_romanised}</h2>
            <img class="imagem" src=${filme.image}>
            <img class="banner" src=${filme.movie_banner}>
            
            <p class="id">${filme.id}</p>
        </div>
        `
      })
}
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}
getFilmes()