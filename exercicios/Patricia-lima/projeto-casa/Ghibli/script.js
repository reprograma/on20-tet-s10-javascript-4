const container = document.getElementById('demo')

async function getFilmes(filmes) {
  try {
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
    const json = await resposta.json()
    const title = document.createElement('h1')
    title.innerHTML('src', json.title)
    container.appendChild(title)
   
  }
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}

getFilmes()


// https://ghibliapi.herokuapp.com /films