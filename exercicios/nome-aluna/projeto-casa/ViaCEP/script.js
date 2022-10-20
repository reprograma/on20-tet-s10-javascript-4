const main= document.getElementById("pesquisar-cep")

async function encontrarEndereco(){
try{
    const resposta = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
    const cep = await resposta.json()

    const form = document.createElement ("form")
    main.appendChild(form);

}

catch(erro) {
    console.error('Encontrou-se um erro!', erro)

}
}