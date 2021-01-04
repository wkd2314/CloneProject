// functional >> lower case , components >> upper case
const API_KEY = "db537366400b54ae13f6cb2f07ce91cb";

const requests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetfilxOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAnimationMovies :`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchFantasyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchMysteryMovies :`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
}

export default requests;