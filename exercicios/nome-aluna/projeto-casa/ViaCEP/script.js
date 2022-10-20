let buscar = document.getElementById("buscar");


buscar.addEventListener('click', function (e) {
    const elementoCep = document.getElementById("cep");
    const cep = elementoCep.value;
    buscarFilme(cep);
});


async function buscarFilme(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {headers: {"Access-Control-Allow-Origin": "*"}});
        const dados = await resposta.json();

        logradouro.innerText = dados.logradouro;
        bairro.innerText = dados.bairro;
        cidade.innerText = dados.localidade;
        uf.innerText = dados.uf;
    } catch (err) {
        console.error('Capturei um erro:', err);
    }
}