


async function pegarCep(cep){
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const endereco = await resposta.json()
    console.log(endereco)
}

pegarCep('41218011')