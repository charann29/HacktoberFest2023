const moviesContainer = document.getElementById('movies-container');

// Sample movie data (you can replace this with real data from an API or database)
const moviesData = [
    {
        title: 'Movie 1',
        poster: 'movie1.jpg',
        description: 'Description for Movie 1.',
    },
    {
        title: 'Movie 2',
        poster: 'movie2.jpg',
        description: 'Description for Movie 2.',
    },
    // Add more movie objects here
];

// Function to create a movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
    `;
    
    return card;
}

// Populate the moviesContainer with movie cards
moviesData.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesContainer.appendChild(movieCard);
});
