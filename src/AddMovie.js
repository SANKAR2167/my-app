import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({movieList, setMovieList}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="add-movie-form">
      <TextField onChange={(event) => setName(event.target.value)} label="Movie Name" variant="outlined" />

      <TextField onChange={(event) => setPoster(event.target.value)} label="Poster URL" variant="outlined" />

      <TextField onChange={(event) => setRating(event.target.value)} label="Movie Rating" variant="outlined" />

      <TextField onChange={(event) => setSummary(event.target.value)} label="Movie Summary" variant="outlined" />

      <Button onClick={addMovie} variant="contained">Add Movie</Button>
    </div>
  );
}
