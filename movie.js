// const api2URL="//www.omdbapi.com/?apikey=6c3f9ab7&i=tt0118971";
// const img="//img.omdbapi.com/?apikey=6c3f9ab7&i=tt0118971";

// fetch (api2URL)
// .then((response) => response.json())
// .then((movieInfo) => {
//       console.log(movieInfo);
// document.getElementById("title").innerHTML=movieInfo.Title;
// document.getElementById("year").innerHTML=movieInfo.Year;

// });
const apiURL ="//www.omdbapi.com/?apikey=6c3f9ab7&i=tt0118971";

fetch (apiURL)
.then((response) => response.json())
.then((movieInfo)=> {
    console.log(movieInfo);

document.getElementById("place").innerHTML=movieInfo.Title;
document.getElementById("director").innerHTML=movieInfo.Director;
document.getElementById("released").innerHTML=movieInfo.Released;
document.getElementById("plot").innerHTML=movieInfo.Plot;
document.getElementById("genre").innerHTML=movieInfo.Genre;
document.getElementById("mins").innerHTML=movieInfo.Runtime;

const img=movieInfo.Poster;
document.getElementById("poster").src=iconCodeTwo;
}
);