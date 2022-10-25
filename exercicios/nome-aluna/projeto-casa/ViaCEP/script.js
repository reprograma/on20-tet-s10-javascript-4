const mensagemErro = document.getElementById('mensagem-erro')
function consultaEdereco() {
    const cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        mensagemErro.innerHTML = ' CEP inválido';
        return;
    }else {
        mensagemErro.innerHTML = ' ';
    }


    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function (response) {
        response.json().then(mosatrarEndereco)
        })

        

    }



function mosatrarEndereco(dados) {
    const resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = 'Não foi possivel localizar endereço '
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}<p/>
    <p>Complemento: ${dados.complemento}<p/>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`

    }
}