const conteiner = document.getElementById('demo')

async function getDog(raca) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
    const json = await response.json()
    const imagem = document.createElement('img')
    imagem.setAttribute('src', json.message)
    conteiner.appendChild(imagem)
  }

  catch(erro){
    console.log('Capturei um erro' + erro)
  }
}

getDog('chow')