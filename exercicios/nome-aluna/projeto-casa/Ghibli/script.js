const container = document.getElementById('demo')

async function getFilmes() {
    try {
        const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
        const dados = await resposta.json()
        dados.forEach((filme) => {
            container.innerHTML +=
                `<div class="cards">
            <h1 class="titulo">${filme.title}</h1>
            <img class="imagem"src=${filme.image}>
            <p class="type">(${filme.original_title})</p>
         <p class="date">${filme.release_date}</p>
    <p class="director">by ${filme.director}</p>
    <p class="description">${filme.description}</p>
        </div> 
        `
        })

    }
    catch (err) {
        console.error('Capturei um erro:', err)
    }
}
getFilmes()