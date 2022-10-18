const container = document.getElementById('main')


function criarCards(filme){
    return `
    <div class="card">  
        <img src=${filme.image} alt="">
        <div class="descricao-card">
        <h2>${filme.title}</h2>
        <p>${filme.description}</p>
        </div>
      </div>
    `
}

async function mostrarPagina(){
    try {
        const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
        const filmes = await resposta.json()
        filmes.map((filme) => {
            console.log(filme);
            container.innerHTML = criarCards(filme)
        })
        
    } catch (erro) {
        console.error('Capiturei um erro:', erro)
    }
}

mostrarPagina()

