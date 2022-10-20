const cep = document.querySelector("#cep")

//aparecer no formulário
const retorno = (resultado) => {
    for (const campo in resultado) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = resultado[campo]
        }
    }
}

cep.addEventListener("blur", (evento) => {
    let procure = cep.value.replace("-", "") //pegue o - e troque por nada

    const opcoes = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'

    }

    fetch(`https://viacep.com.br/ws/${procure}/json/`, opcoes)
        .then(response => {
            response.json()
            .then(data => retorno(data))

        })

        .catch(evento => console.log('Capturou Erro: '+ evento,message))

})


