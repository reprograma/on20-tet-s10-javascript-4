// TODO: criar função que retorna o html
const createSection = (film) => {
    return `
      <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
      </div>
    `
  }
  
  const container = document.getElementById('demo')

// TODO: criar uma função asyncrona que realiza a requição 

const getFilms = async () => {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const films = await response.json()
        return films
    }
    catch (err) {
        console.error("Capturei um erro: ", err)
    }
}

// TODO: criar uma função que gerencia toda a funcionalidade da aplicação 

 
  getFilms().then((films) => films.map((film) => container.innerHTML += createSection(film)))