const container = document.getElementById('main-content')

function createCard(film) {
    return `
    <div class="card">
    <img class="image" src=${film.image}>
    <h2 class="title">${film.title}</h2>
    <p class="type">(${film.original_title})</p>
    <p class="date">${film.release_date}</p>
    <p class="director">by ${film.director}</p>
    <p class="description">${film.description}</p>
    </div>
    `}

async function ghibliStudio () {
    try {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films`)
        const json = await response.json()
        json.map((film) => {
        container.innerHTML += createCard(film)
        })
    }
    catch(err) {
        console.error('O erro é ', err)
    } }

async function main () {
    const cards = await ghibliStudio()
    cards.map((card) => {
        container.innerHTML += createCard(card)
     })
} 

main()