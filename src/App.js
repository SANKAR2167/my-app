import logo from './logo.svg';
import './App.css';

// app component = view + logic (declaration)
function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

// user component (declaration)

function User() {
  let name = "sankar";
  return(
      <h1>Hi, {name}</h1>
  );
}
export default App;
