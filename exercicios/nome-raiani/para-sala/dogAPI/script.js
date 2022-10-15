// https://dog.ceo/dog-api/breeds-list


const container = document.getElementById('demo')

async function getDoguinho(raca) {
    try{
      const resposta = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
      const json = await resposta.json()
      const imagem = document.createElement('img')
      imagem.setAttribute('src', json.message)
      container.appendChild(imagem)
    }
    catch(erro){
        console.error('Capiturei um erro:', erro)
    }
 }

 getDoguinho('akita')
