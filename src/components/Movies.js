import React from "react";
import { movies } from "../data";


// console.log(movies);

const listOfMovies = movies.map(movie => {
  return (
    <div key={movie.title}>
      <h3>Movies: {movie.title}</h3>
      <h4>Time: {movie.time}</h4>
      <ul>
       {movie.genres.map(genre => {
         return (
          <li key={genre}>{genre}</li>
         )
       })}
      </ul>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {listOfMovies}
    </div>
  );
}

export default Movies;
