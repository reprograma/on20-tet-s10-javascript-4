
const container = document.getElementById('demo');
console.log('demo')

const createSection = (film) => {
    return `
      <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
      </div>
    `
  }



const  getFilms = async () => {
    try{
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const films = await response.json()
        const filmes = films.slice(1,6)
        filmes.forEach(e => {
            console.log(e.title) 
        });
       
        return films
    }
    catch(err){
        console.error("Capturei um erro",err)
    }
}
getFilms().then((films) => films.map((films) => container.innerHTML += createSection(films)))