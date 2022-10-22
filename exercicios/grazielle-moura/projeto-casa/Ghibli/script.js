const createSection = (film) => {
    return `
      <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
      </div>
    `
  }
  
  const container = document.getElementById('demo')
  
  const getFilms = async () => {
    try{
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const films = await response.json()
      const ourFilms = films.slice(0,20)
      return ourFilms
    }
    catch(err) {
      console.error("Capturei um erro: ", err)
    }
  }
  
  getFilms().then((films) => films.map((film) => container.innerHTML += createSection(film)))
  
  