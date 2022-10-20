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
            <h3 class="titulo-dois">${filme.original_title_romanised}</h3>
            <img class="imagem" src=${filme.image}>
            <img class="banner" src=${filme.movie_banner}>
            <p class="descricao">${filme.description}</p>
            <h4 class="diretor">Diretor: ${filme.director}</h4>
            <h5 class="producao">Produção: ${filme.producer}</h5>
            <h5 class="data-lancamento">Data de Lançamento: ${filme.release_date}</h5>
            <h6 class="tempo-execucao">Tempo de Execução: ${filme.running_time}</h6>
            <h6 class="score">Avaliação: ${filme.rt_score}</h6>
        </div>
        `
      })
}
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}
getFilmes()



