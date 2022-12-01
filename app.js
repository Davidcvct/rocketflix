const movieContainer = document.querySelector('.movie-info')
const moviePoster = document.querySelector('.movie-poster')
const movieTitle = document.querySelector('.movie-title')
const movieDescription = document.querySelector('.movie-description')
const getRandonMovieButton = document.querySelector('.find-movie')

const API_KEY = '4fb4ebe9a0d5b28bb517b3b359db7aaf'

getRandonMovieButton.addEventListener('click' , async () => {
    const randomId = Math.floor(Math.random() * 500)
    const movie = await getMovie(randomId)
    renderMovie(movie)
})

async function getMovie(randomId) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${randomId}?api_key=4fb4ebe9a0d5b28bb517b3b359db7aaf`)
    const movieData = await movie.json()

    return movieData
}

function renderMovie(movieData) {
    movieContainer.style.display = 'flex'

    moviePoster.src = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
    movieTitle.textContent = movieData.title
    movieDescription.textContent = movieData.overview
}