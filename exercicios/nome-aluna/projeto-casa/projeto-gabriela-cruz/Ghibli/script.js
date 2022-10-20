const container = document.getElementById("ghibli")

function createContainer(container) {
  return `
    <div class="container">
      <img class="image" src=${container.image}>
      <h2 class="title">${container.title}</h2>
      <p class="director">Director: ${container.director}</p>
      <p class="description">${container.description}</p>
    </div>
  `
}

async function getSeries() {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const json = await response.json()
    return json
  }
  catch(err) {
    console.log("Capturei um erro:", err)
  }
}

async function main() {
  const cards = await getSeries()
  cards.map((serie) => {
    container.innerHTML += createContainer(serie)
  })
}

main()