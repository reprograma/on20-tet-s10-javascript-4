// https://viacep.com.br/ws/${cep}/json/
const principal = document.querySelector('#principal');
let botaoPesquisar = document.querySelector('#botaoPesquisar');
console.log(botaoPesquisar)

botaoPesquisar.addEventListener('click', function(event){
    event.preventDefault();
    let cepDigitado = document.querySelector('#cepDigitado').value;

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then((response) => response.json()) //primeiro converte para Json
        .then((cep) => escreverDados(cep)) //obter os dados da resposta do JSON
        .catch((err) => escreverErro(err))
});    

function escreverErro(err){
    let textCep = document.querySelector("#text-cep");
   textCep.innerHTML = "CEP inválido";
    console.log('Erro ao pegar dados: ' + err); //mensagem de erro
}

function escreverDados(cep) {
   let textCep = document.querySelector("#text-cep");
   textCep.innerHTML = preencherDados(cep);
}

function preencherDados(cep) {
    return `    
    <p>Logradouro: ${cep.logradouro}</p>
    <p>Bairro: ${cep.bairro}</p>
    <p>Cidade: ${cep.localidade}</p>
    <p>Estado: ${cep.uf}</p>
    `     
}
