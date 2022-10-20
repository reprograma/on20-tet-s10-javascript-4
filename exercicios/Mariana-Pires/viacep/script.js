const container = document.getElementById('main-content');
let inputUser = prompt("Digite seu CEP");

async function getData(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await response.json();
        console.log("CEP: ", json.cep);
        console.log("RUA: ", json.logradouro);
        console.log("BAIRRO: ", json.bairro);
        console.log("LOCALIDADE: ", json.localidade);
        console.log("CIDADE: ", json.uf);
    }
    catch(err) {
        console.error('O erro é ', err);
    } }

getData(inputUser)