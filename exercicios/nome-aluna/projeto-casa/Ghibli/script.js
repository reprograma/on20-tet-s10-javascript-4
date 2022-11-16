        // Atividade Filmes(fazer meu estilo)

const createSection = (film) => {
    return`
        <div class ="film">
            <img src=${film.image} class="image">
            <h2 class="title">${film.title}</h2>
        </div>
    `
}
const container = document.getElementById('demo')

const getFilms = async () => {
    try{
        const responde = await fetch('https://ghibliapi.herokuapp.com/films')
        const films = await responde.json()
         const ourFilms= films.slice (0, 10)
         return ourFilms
        //  return films
    }
    catch(err) {
    console.error("Capturei um erro:", err)
    }
}

//getFilmes().then((films) => films.map((film) => container.innerHTML += createSection(film)))

main = async () => {
    const films = await getFilms()
    films.map((film) => {
      container.innerHTML +=createSection(film)
    })
}

main()