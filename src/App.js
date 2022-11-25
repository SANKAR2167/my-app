import './App.css';
import { MovieList } from './MovieList';
import {Routes, Route, Link} from 'react-router-dom';

// app component = view + logic (declaration)
function App() {
  return (
    <div className="App">
      {/* <MovieList/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;

function Home(){
  return(
    <div>
      <h1>welcome to movie app</h1>
    </div>
  )
}