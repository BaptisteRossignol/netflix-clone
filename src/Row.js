import React, { useState, useEffect } from 'react';
import axios from './axios.js';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div>
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster(s)*/}


        {movies.map(movie => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} width="200" />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  )
}

export default Row;