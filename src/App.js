import logo from './logo.svg';
import './App.css';
import { User } from './User';
import {Welcome} from './Welcome';
import { useState } from 'react';
import { MovieList } from './MovieList';
// app component = view + logic (declaration)
function App() {

  const users=[
    {name : "sankar",
    url : ""},
    {name : "santhosh",
    url : ""},
    {name : "Gowsi",
    url : ""}];

    const names=["Gowsalya", "Subbu", "Karthi"]
  return (
    <div className="App">
      {/* {names.map((nm)=>(
        <Welcome name={nm}/>
      ))} */}

      {/* {users.map((usr)=>(<User name={usr.name} url={usr.url}/>))} */}
      <MovieList/>
      {/* <AddColor/> */}
    </div>
  );
}

function AddColor(){
  const [color, setColor] = useState('orange')
  const styles = {
    background: color,
  }
  const [colorList, setColorList]= useState(['crimson', 'orange', 'red', 'pink']);
  return(
    <div>
      <input style={styles} 
      onChange={(event)=> setColor(event.target.value)}
      placeholder='enter a color' 
      value={color}/>
      <button onClick={()=> setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr)=><ColorBox color={clr}/>)}
    </div>
  );
}

function ColorBox({color}){
  const styles = {
    width: '250px',
    height: '25px',
    background:color,
    marginTop:'10px',
  }
  return <div style={styles}>
    
  </div>
}

export default App;
