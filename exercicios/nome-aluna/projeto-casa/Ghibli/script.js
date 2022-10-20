
const container = document.getElementById("demo")

function createfilme(filme) {
  return `
    <div class="filme">
      <img class="image" src=${filme.filme_images[0].image_url}>
      <h2 class="title">${filme.name}</h2>
      <p class="original-Title">${filme.originalTitle}</p>
      <p class="type">${filme.originalTitleRemanised}</p>
      <p class="type">${filme.director}</p>
      <p class="type">${filme.producer}</p>
      <p class="type">${filme.releaseDate}</p>
      <p class="type">${filme.runnigTime}</p>
      <p class="description">${filme.desc}</p>
    </div>
  `
}

async function getfilmes() {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const json = await response.json()
    const filmes = json.data
    return oursfilmes
  }
  catch(err) {
    console.log("Capturei um erro:", err)
  }
}

async function main() {
  const filmes = await getfilmes()
  filmes.map((filme) => {
    container.innerHTML += createfilme(filme)
  })
}

main()



