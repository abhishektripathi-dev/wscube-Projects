let moviesGrid = document.querySelector(".movies-grid");
let page = 1;
let getMovies = (search) => {
    let apiUrl;
    if (search) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    } else {
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
    }

    fetch(apiUrl)
        .then((res) => res.json())
        .then((finalRes) => {
            window.scrollTo({
                top: "0px",
                behavior: "smooth",
            });
            let { results } = finalRes; //Array [20 Element]
            let movieItem = "";
            results.forEach((element) => {
                let {
                    original_title,
                    vote_average,
                    release_date,
                    poster_path,
                } = element;

                movieItem += `<article class="movie-card">
                    <div
                        class="movie-poster"
                        style="
                        background-image: url('https://image.tmdb.org/t/p/w1280/${poster_path}');
                        "
                    >
                        <div class="movie-badge">New</div>
                        <div class="movie-rating">
                        <span>★</span>
                        <span>8.4</span>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title"> ${original_title} </h3>
                        <p class="movie-meta">${release_date}</p>
                    </div>
                    </article>`;
            });

            moviesGrid.innerHTML = movieItem;
        });
};

getMovies();

let searchBoxinput = document.querySelector(".search-box input");

searchBoxinput.addEventListener("keyup", (e) => {
    //    console.log(e.target.value);  //searchBoxinput

    getMovies(e.target.value);
});

let preMobvieData = () => {
    if (page > 1) {
        page = page - 1;
    }
    getMovies();
};

let nextMobvieData = () => {
    page = page + 1;
    getMovies();
};
