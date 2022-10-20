const container = document.getElementById('demo')

async function getEndereco() {
  try {
    const valorCep = document.getElementById('cep').value
    const endereco = document.getElementById('endereco')

    const resposta = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    const dados = await resposta.json()

    endereco.textContent = `${dados.logradouro}, ${dados.bairro} - ${dados.localidade} - ${dados.uf}`
}
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}