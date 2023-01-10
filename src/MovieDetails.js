import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { API } from './global';

export function MovieDetails() {
  const { id } = useParams();
  
  const [movie, setMovieList] = useState([]);
  // after app component is mounted
  // axios
  useEffect(()=>{
    fetch(`${API}/movies/${id}`, {method:'GET'}).then((data) => data.json()).then((movies) => setMovieList(movies));
    }, []);

  const styles = {
    color: movie.rating >= 8.5 ? 'green' : 'red'
  };
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%" height="850px" src={movie.trailer} title="Vijay Devarakonda Enquiry | Tamil News | Madan Gowri | MG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='movie-detail-container'>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name} <IconButton onClick={() => setShow(!show)} aria-label="toggle" color='primary'>
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton></h2>
          <p className='movie-rating' style={styles}>⭐ {movie.rating}</p>
        </div>
        {show ? <p className='movie-summary'>{movie.summary}</p> : null}
        <Button variant="contained" onClick={() => navigate(-1)}><KeyboardBackspaceIcon /> Back</Button>
      </div>
    </div>
  );
}
