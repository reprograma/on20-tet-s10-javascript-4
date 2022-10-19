const container = document.getElementById('demo')

async function getFilmes() {
  try {
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
    const dados = await resposta.json()
    const id = document.createElement ("id")
    id.textContent = 'id';
    container.appendChild (id)
    console.log(dados[0].id)
    const titulo = document.createElement("title")
    titulo.textContent = 'texto';
    container.appendChild(titulo)
    console.log(dados[0].title)
    const tituloOriginal = document.createElement("original_title")
    tituloOriginal. textContent = 'texto';
    container.appendChild(tituloOriginal)
    console.log(dados[0].original_title)
}
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}

getFilmes()