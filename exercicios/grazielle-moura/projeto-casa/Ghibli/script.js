const container = document.getElementById('demo')

async function getFilmes(filmes) {
try {

    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const filmes = await response.json()
    filmes.forEach(element => {
        const filme = document.createElement('img')
        filme.setAttribute('src', element.image)
        container.appendChild(filme);
    });


}
catch(err) {
   console.log('Capturei um erro:', err)
}}

getFilmes()

