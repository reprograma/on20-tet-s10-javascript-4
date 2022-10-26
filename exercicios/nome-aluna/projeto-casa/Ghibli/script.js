const body = document.querySelector('body')
const div = document.createElement('div')
div.classList.add('main')
body.appendChild(div)
const logo = document.createElement('img')
logo.setAttribute('src', 'https://melaniesigrid.github.io/studio_ghibli/static/media/topImage.19822478513873555297.png')
logo.classList.add('logo')
body.insertBefore(logo,div)


function createCard(card) {
    return `
      <div class="card">
        <img class="image" src=${card.image}>
        <div class="text">
        <h2 class="title">${card.title}</h2>
        <p class="date">${card.release_date}</p>
        <p class="description">${card.description}</p>
        </div>
      </div>
    `
}
async function getCards() {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const json = await response.json()
        const oursCards = json.slice(0,10)
        return oursCards
    }
    catch (err) {
        console.log("Capturei um erro:", err)
    }
}
async function main() {
    const cards = await getCards()
    cards.map((card) => {
        div.innerHTML += createCard(card)
    })
}