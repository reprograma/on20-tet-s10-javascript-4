const main = document.getElementById('cards-filmes')



async function preencherCards() {
  try {
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')

    const dados = await resposta.json()

      dados.slice(5, -5).forEach((itensApi) => {
      const div = document.createElement('div')
      main.appendChild(div)


      const imagem = document.createElement('img')
      imagem.setAttribute('src', itensApi.image)
      imagem.setAttribute('alt', "capa-de-filme")
      div.appendChild(imagem)

      const tituloOriginal = document.createElement('h2')
      tituloOriginal.innerText = itensApi.original_title
      div.appendChild(tituloOriginal)

      const titulo = document.createElement('h2')
      titulo.innerText = itensApi.title
      div.appendChild(titulo)


    })
  }
  catch (erro) {
    console.error('Capturei um erro:', erro)

  }
}


preencherCards()