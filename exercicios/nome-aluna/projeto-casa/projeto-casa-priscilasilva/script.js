let conteudo = document.getElementById("conteudo_filmes");


createFilmes(conteudo);


async function createFilmes(conteudo) {
    try {
        const resposta = await fetch(`https://ghibliapi.herokuapp.com/films`);
        const dados = await resposta.json();

        dados.forEach(dado => {
            createCard(conteudo, dado);
        });
    } catch (err) {
        console.error('Tente novamente:', err);
    }
}


function createCard(conteudo, dado) {
    const divDadosFilmes = createDivDadosFilmes()
    const imagemFilme = createImagemFilme(dado.image);
    const bannerFilme = createImagemFilme(dado.movie_banner);
    const title = createSpan("Title: ", dado.title);
    const originalTitle = createSpan("Original Title: ", dado.original_title);
    const originalTitleRomanised = createSpan("Original Title Romanised: ", dado.original_title_romanised);
    const description = createSpan("Description: ", dado.description);
    const director = createSpan("Director: ", dado.director);
    const producer = createSpan("Producer: ", dado.producer);
    const releaseDate = createSpan("Release Date: ", dado.release_date);
    const runningTime = createSpan("Running Time: ", dado.running_time);
    const score = createSpan("RT Score: ", dado.rt_score);

    divDadosFilmes.appendChild(imagemFilme);
    divDadosFilmes.appendChild(title);
    divDadosFilmes.appendChild(originalTitle);
    divDadosFilmes.appendChild(originalTitleRomanised);
    divDadosFilmes.appendChild(description);
    divDadosFilmes.appendChild(director);
    divDadosFilmes.appendChild(producer);
    divDadosFilmes.appendChild(releaseDate);
    divDadosFilmes.appendChild(runningTime);
    divDadosFilmes.appendChild(score);
    divDadosFilmes.appendChild(bannerFilme);

    conteudo.appendChild(divDadosFilmes);
}


function createDivDadosFilmes() {
    const div = document.createElement("div");
    div.setAttribute("class", "dados_filmes");
    return div;
}

function createImagemFilme(foto) {
    const imagem = document.createElement("img");
    imagem.setAttribute("class", "imagem_filme");
    imagem.setAttribute("src", foto);
    return imagem;
}

function createSpan(titulo, valor) {
    const strong = document.createElement("strong");
    const span = document.createElement("span");

    strong.innerText = titulo;

    span.appendChild(strong);
    span.append(valor);

    return span;
}