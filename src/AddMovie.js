
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from "./global";

const movieValidationSchema = yup.object({
  name:yup.string().required(),
  poster:yup.string().required().min(4).url(),
  rating:yup.number().required().min(0).max(10),
  summary:yup.string().required().min(20),
  trailer:yup.string().required().min(4).url(),
})
export function AddMovie() {
    const {handleBlur, handleChange, handleSubmit,touched,errors,values} = useFormik({
      initialValues: {
        name:'',
        poster:'',
        rating:'',
        summary:'',
        trailer:'',
      },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        addMovie(newMovie);
      }
    })

    // adding data to rest api

    // steps to add movie in api
    // 1. method => post
    // 2. body => data & type is in JSON
    // 3. header => JSON
    const navigate = useNavigate();
    const addMovie = (newMovie)=>{
      fetch(`${API}/movies`, {
      method:'POST',
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    }).then(()=>navigate('/movies'));
    }
      
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField label="Movie Name" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur} name='name'/>

      {touched.name && errors.name ? errors.name : null}

      <TextField label="Poster URL" variant="outlined" value={values.poster} onChange={handleChange} onBlur={handleBlur} name='poster'/>

      {touched.poster && errors.poster ? errors.poster : null}

      <TextField label="Movie Rating" variant="outlined" value={values.rating} onChange={handleChange} onBlur={handleBlur} name='rating'/>

      {touched.rating && errors.rating ? errors.rating : null}

      <TextField label="Movie Summary" variant="outlined" value={values.summary} onChange={handleChange} onBlur={handleBlur} name='summary'/>

      {touched.summary && errors.summary ? errors.summary : null}

      <TextField label="Movie Trailer" variant="outlined" value={values.trailer} onChange={handleChange} onBlur={handleBlur} name='trailer'/>

      {touched.trailer && errors.trailer ? errors.trailer : null}

      <Button type="submit" variant="contained">Add Movie</Button>
    </form>
  );
};