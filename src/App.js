import './App.css';
import { MovieList } from './MovieList';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { AddMovie } from './AddMovie';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Notfound } from './Notfound';
import { Home } from './Home';
import { MovieDetails } from './MovieDetails';
import { BasicForm } from './BasicForm';

// app component = view + logic (declaration)
function App() {
  const [movieList, setMovieList] = useState([]);

  const navigate = useNavigate();

  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: '100vh', borderRadius: '0%' }} elevation={4} >
        <div className="App">
          <AppBar position='static'>
            <Toolbar>
              <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
              <Button color='inherit' onClick={() => navigate('/movies')}>Movies</Button>
              <Button color='inherit' onClick={() => navigate('/movies/add')}>Add Movie</Button>
              <Button
                sx={{marginLeft:'auto'}}
                startIcon={mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                color='inherit' onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>{mode === 'light' ? 'dark' : 'light'} mode</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<Navigate replace to='/movies' />} />
            <Route path='/movies' element={<MovieList movieList={movieList} />} />
            <Route path='/movies/add' element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
            <Route path='/movies/:id' element={<MovieDetails movieList={movieList} />} />
            <Route path='/basic-form' element={<BasicForm />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;