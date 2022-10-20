const container = document.getElementById("demo")

function createFilme(filme) {
    return `
      <div class="filme">
        <img class="image" src=${filme.image}>
        <div class="filme-info">
            <h2 class="title">${filme.title}</h2>
            <p class="roman">Título romanizado: ${filme.original_title_romanised}</p>
            <p class="description">${filme.description}</p>
        </div>
      </div>
    `
  }
  
  async function getFilmes() {
    try {
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const filmes = await response.json()
      return filmes
    }
    catch(err) {
      console.log("Capturei um erro:", err)
    }
  }
  
  async function main() {
    const filmes = await getFilmes()
    filmes.map((filme) => {
      container.innerHTML += createFilme(filme)
    })
  }
  
  main()