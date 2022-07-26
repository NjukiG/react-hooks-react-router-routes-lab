import React from "react";
import { directors } from "../data";


//console.log(directors)

const listOfDirectors = directors.map(director => {
  return (
    <div key={director.name}>
      <h3>Director's Name: {director.name}</h3>
      <ul>
        {director.movies.map(movie => {
          return (
            <li key={movie}>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {listOfDirectors}
    </div>
  )
}

export default Directors;
