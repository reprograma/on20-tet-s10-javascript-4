// TODO: Criar um evento para o click do botão  -> addEventListener
// TODO: Funcão que faz a requisição e será chamada no evento
// TODO: Função que de fato adicion a as informação da resposta nos inputs

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault()
  getAddress()
})

async function getAddress() {
  try {
    const cep = document.getElementById('cep').value
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const address = await response.json()
    document.getElementById('cep').value = address.cep
    document.getElementById('logradouro').value = address.logradouro
    document.getElementById('bairro').value = address.bairro
    document.getElementById('localidade').value = address.localidade
    document.getElementById('uf').value = address.uf
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}
