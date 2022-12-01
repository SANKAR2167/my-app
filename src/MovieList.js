import { useState } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
export function MovieList({movieList}) {
  return (
    <div>
      <div className='movie-list'>
        {movieList.map((mv, index) => (<Movie key={index} movie={mv} id={index} />))}
      </div>
    </div>
  );
}
