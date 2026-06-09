// https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search};

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1

let imgAddress = "https://image.tmdb.org/t/p/w1280/"

function display(items) {
    // console.log(items);

    let str=""

    items.forEach((el) => {
        // ({original_title, poster_path,release_date, vote_average} = el)  // destructuring of object
        let title = el.original_title;
        let imgPath = el.poster_path;
        let date = el.release_date;
        let rating = el.vote_average;


        str += `<div class="movie-card">
                <img
                    src="${imgAddress+imgPath}"
                    alt="movie"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="rating">⭐ ${rating}</span>
                    <p>${date}</p>
                </div>
            </div>`
    });

    document.querySelector(".movies-container").innerHTML = str
}

async function getMovies(search) {
    try {
        let url;

        if(search){
            url= `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
        }else{
            url= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1"
        }

        let response = await fetch(url);
        let data = await response.json();

        // console.log(data.results);

        display(data.results); // 
    } catch (error) {
        console.log(error);
    }
}

getMovies();

let searchEl = document.querySelector(".search");

searchEl.addEventListener("keyup", (e)=>{
    // console.log(e.target.value)
    getMovies(e.target.value);
})

// fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
