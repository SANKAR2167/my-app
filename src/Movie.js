import { Counter } from './Counter';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8.5 ? 'green' : 'red'
  };

  const [show, setShow] = useState(true);
  return (
    <div className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name} <IconButton onClick={() => setShow(!show)} aria-label="toggle" color='primary'>
      {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </IconButton></h2>
        <p className='movie-rating' style={styles}>⭐ {movie.rating}</p>
      </div>
      
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
