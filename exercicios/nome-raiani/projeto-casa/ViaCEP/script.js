




function criarCards(endereco){
    return `
        <div class="card">
            <p> Logradouro: <br> ${endereco.logradouro}</p>
            <hr>
            <p> Bairro: <br> ${endereco.bairro}</p>
            <hr>
            <p> Localidade: <br>  ${endereco.localidade}</p>
            <hr>
            <p> Uf: <br> ${endereco.uf}</p>
            <hr>
            <p> DDD: <br> ${endereco.ddd}</p>
            <hr>
        </div>
    `
}


async function pegarCep(){
    let input = document.getElementById('input')
    let mensagemErro = document.querySelector('.mensagem-erro')

    if (input.value === '') {
        mensagemErro.style.display = 'block'
    } else {
        mensagemErro.style.display = 'none'

        let cep = input.value
        console.log(cep)
   
       const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
       const endereco = await resposta.json()
       document.getElementById('main').innerHTML = criarCards(endereco)
       console.log(endereco)
   
       input.value = ""
    }

}