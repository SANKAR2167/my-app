import './App.css';
import { MovieList } from './MovieList';
import {Routes, Route, Link} from 'react-router-dom';

// app component = view + logic (declaration)
function App() {
  return (
    <div className="App">
      <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Movies">Movie List</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<MovieList/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>welcome to movie app</h1>
      
    </div>
  )
}

function Notfound(){
  return(
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to="/">Home</Link>
    </div>
  )
}


export default App;

