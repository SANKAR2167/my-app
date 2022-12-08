import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

//container & presentational  or smart &presentational 
export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = ()=>{
    fetch('https://638af1ba7220b45d22850b2c.mockapi.io/movies', {method:'GET'}).then((data) => data.json()).then((movies) => setMovieList(movies));
  }

  // after app component is mounted
  // axios
  useEffect(()=>{getMovies()}, []);

    const deleteMovie = (id) => {
      fetch(`https://638af1ba7220b45d22850b2c.mockapi.io/movies/${id}`, {method:'DELETE'}).then((data) => getMovies())
    };
  return (
    <div>
      <div className='movie-list'>
        {movieList.map((mv) => (<Movie key={mv.id} movie={mv} id={mv.id} 
        // rendder props
        deleteButton={<IconButton onClick={()=> deleteMovie(mv.id)} color='error' aria-lable='delete' sx={{marginLeft:'auto'}}><DeleteIcon/></IconButton>}/>))}
      </div>
      
    </div>
  );
}
