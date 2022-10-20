const cardsContainer = document.querySelector('.cards-container');

const createMovieCard = ({
    image,
    title,
    director,
    release_date,
    running_time,
    rt_score
}) =>
    `<div class="card">
        <div class="card-content">
            <img class="card-front" src="${image}">
            <div class="card-back" style="--movie-image: url(${image})">
                <h2 class="card-title">${title}</h2>
                <span class="card-release-date">${release_date}</span>
                <p class="card-running-time">${running_time} mins</p>
                <p class="card-director">${director}</p>
                <p class="card-score">${rt_score}/100</p>
            </div>
        </div>
    </div>`;

fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(movies => {
        cardsContainer.innerHTML = movies
            .sort(({ rt_score: rottenTomatoesA }, { rt_score: rottenTomatoesB }) => rottenTomatoesB - rottenTomatoesA)
            .map(createMovieCard)
            .join('\n');
    });
