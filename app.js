const apiKey = "52062055a50642dbe3ea3347e25865a5";
const baseURL = "https://api.themoviedb.org/3";
const apiUrl =
  baseURL + "/discover/movie?sort_by=popularity.desc&api_key=" + apiKey;

const moviesOfTheYear =
  baseURL +
  "/discover/movie?with_genres=18&primary_release_year=2022&api_key=" +
  apiKey;

const data = (apiUrl) => {
  let entries = axios.get(apiUrl);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  entries
    .then((result) => {
      const data = result.data.results;

      data.forEach((item) => {
        const posters = document.getElementById("popular");
        const imgEl = document.createElement("img");
        imgEl.src = imgUrl + item.poster_path;
        posters.appendChild(imgEl);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

data(apiUrl);

const ofTheYear = (moviesOfTheYear) => {
  let entries = axios.get(moviesOfTheYear);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  entries
    .then((result) => {
      const ofTheYear = result.data.results;
      ofTheYear.forEach((item) => {
        const posters = document.getElementById("moviesOfTheYear");
        const imgEl = document.createElement("img");
        imgEl.src = imgUrl + item.poster_path;
        posters.appendChild(imgEl);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

ofTheYear(moviesOfTheYear);
