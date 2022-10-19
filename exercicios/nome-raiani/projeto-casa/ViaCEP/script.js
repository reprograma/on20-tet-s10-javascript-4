
function criarCards(endereco){
    return `
        <div class="card">
            <p>${endereco.logradouro}</p>
            <p>${endereco.bairro}</p>
            <p>${endereco.localidade}</p>
            <p>${endereco.ddd}</p>
        </div>
    `
}


async function pegarCep(){
     let cep = document.getElementById('input').value
     console.log(cep)

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const endereco = await resposta.json()
    document.getElementById('main').innerHTML = criarCards(endereco)
    console.log(endereco)

}