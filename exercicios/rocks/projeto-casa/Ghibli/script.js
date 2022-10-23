const container = document.getElementById("demo")

async function getFilms(){
    try{
        const response = await fetch ('https://ghibliapi.herokuapp.com/films')
        const json = await response.json()
        const films = json.data 
        // const allFilms = films.slice(100,105)
        allFilms.map((film)=> {
            const section = document.createElement('div');
            section.setAttribute('class','movie')

            const title = document.createElement('h2');
            title.setAttribute('class','title')

            const description = document.createElement('p');
            description.setAttribute('class','description')

            const director = document.createElement('p');
            director.setAttribute('class','director')

            const banner = document.createElement('img');
            banner.setAttribute('class','image')

            title.innerText = film.name
            description.innerText = film.description
            director.innerText = film.director
            year.innerText = film.year
            // banner.setAttribute('src', film.)

            container.appendChild(section);
            section.appendChild(banner);
            section.appendChild(title);
            section.appendChild(description);
            section.appendChild(director);

        })

    } catch (err){
        console.log ("capturei um erro:",err)
    }
}

getFilms()

// function createCard(films) {
//     return `
//       <div class="films">
//         <img class="image" src=${films.movie_banner[0].image_url}>
//         <h2 class="title">${films.title}</h2>
//         <p class="description">${films.desc}</p>
//         <p class="director">${films.director}</p>
//         <p class="year">${films.year}</p>
//       </div>
//     `
//   }

//  async function getMovie(){
//     try{ 
//         const response = await fetch ('https://ghibliapi.herokuapp.com/films')
//             const json = await response.json()
//             const films = json.data 
//             const allMovies = movies.slice (100,105)
//             return allMovies 

//     }catch(err){
//         console.log("capturei um erro:",err)
//     }

//   }

//   async function main(){
//     const movies = await getMovie()
//     movies.map((card)=> {
//         container.innerHTML+= createCard(films)
//     })
//   }
//   main()