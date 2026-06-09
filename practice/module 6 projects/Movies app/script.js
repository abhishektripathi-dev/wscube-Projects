// let API_BASE_URL="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1"

let imgAddress = "https://image.tmdb.org/t/p/w1280/"

function displayMovie(data) {
    // console.log(data)
    let str=""
    data.forEach((el) => {
        // console.log(el.vote_);
        ({
            original_title: title,
            poster_path: imgUrl,
            release_date: date,
            vote_average: rating,
        } = el);
        // console.log(title, imgUrl, date, rating);

        str+=`<div class="movie-card">
                <img
                    src="${imgAddress+imgUrl}"
                    alt="movie"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="rating">⭐ ${rating.toFixed(1)}</span>
                    <p>${date}</p>
                </div>
            </div>`
    });
    document.querySelector(".movies-container").innerHTML = str;
}

let getMovies = async (search) => {
    let apiUrl;
    if (search) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    } else {
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`;
    }

    let apiRes = await fetch(apiUrl);
    let data = await apiRes.json();

    // console.log(data);

    displayMovie(data.results);
};

getMovies();

document.querySelector(".search").addEventListener("keyup", (e)=>{
    // console.log(e.target.value)
    getMovies(e.target.value);
})
