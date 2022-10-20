const container = document.getElementById("demo")
const input = document.getElementById("insertCEP")



function createCEP(cep) {
    return `
      <div class="Info do CEP">
        <img class="cep" src=${cep.cep}>
        <h2 class="title">${cep.logradouro}</h2>
        <p class="roman">Título romanizado: ${cep.complemento}</p>
        <p class="description">${cep.uf}</p>
      </div>
    `
  }

async function getCEP(input) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${input}/json/`)
    console.log(resposta)
    const dados = await resposta.json()
    console.log(dados)
    return dados
   }
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}

getCEP('22755158')

// não consigo achar o erro que impede o input de ser lido... getCEP funciona, mas showCEP não.

async function showCEP() {
    const dados = await getCEP()
    dados.map((cep) => {
    container.innerHTML += createCEP(cep)
    })
  }


input.addEventListener('submit', showCEP)

