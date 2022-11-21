import logo from './logo.svg';
import './App.css';
import { User } from './User';
import {Welcome} from './Welcome';
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

      {users.map((usr)=>(<User name={usr.name} url={usr.url}/>))}
      
    </div>
  );
}

export default App;
