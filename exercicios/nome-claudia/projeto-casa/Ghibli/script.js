//https://ghibliapi.herokuapp.com/films
//https://ghibliapi.herokuapp.com/

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((animacoes) => preencherCard(animacoes))
  .catch((error) => console.log('Erro ao pegar dados. ' + error));


const containerPrincipal = document.getElementById('container-principal');

function criarCard(animacao) {
  return `
    <div class="card">
    
        <div class="container-titulo-secundario">
        <h2 class="titulo-secundario">${animacao.title}</h2>
        </div>
    
        <div class="card-informacoes"> 
            <img class="div-poster poster" src="${animacao.image}">
            <p class="div-resume resume"><spam>Resume:</spam> ${animacao.description}    </p>
        </div>
    </div>
    `
}

function preencherCard(animacoes) {
  animacoes.forEach(animacao => {
    containerPrincipal.innerHTML += criarCard(animacao)
  });
}
