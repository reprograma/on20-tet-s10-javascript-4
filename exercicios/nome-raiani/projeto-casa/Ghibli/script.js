const container = document.getElementById('main')


function criarCards(filme){
    return `
        <img src=${filme.image} alt="">
        <div class="descricao-card">
        <h2>${filme.title}</h2>
        <p>${filme.description}</p>
        </div>
    `
}

async function mostrarPagina(){
    try {
        const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
        const filmes = await resposta.json()
        filmes.map((filme) => {
            let divCard = document.createElement("div");
            divCard.classList.add('card')
            divCard.innerHTML = criarCards(filme)
            container.append(divCard)
        })
        
    } catch (erro) {
        console.error('Capiturei um erro:', erro)
    }
}

mostrarPagina()

