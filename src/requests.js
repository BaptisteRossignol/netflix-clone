const API_KEY = "7773119c011cc12e9264e289fc360af2";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=fr-FR`,
}

export default requests;