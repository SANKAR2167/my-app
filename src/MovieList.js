import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from "./global";
//container & presentational  or smart &presentational 
export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = ()=>{
    fetch('${API}/movies', {method:'GET'}).then((data) => data.json()).then((movies) => setMovieList(movies));
  }

  // after app component is mounted
  // axios
  useEffect(()=>{getMovies()}, []);

    const deleteMovie = (id) => {
      fetch(`${API}/movies/${id}`, {method:'DELETE'}).then((data) => getMovies())
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
