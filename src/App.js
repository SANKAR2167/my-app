import logo from './logo.svg';
import './App.css';

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
      {/* <User 
      name = "sankar"
      url = ""/>
      <User 
      name = "santhosh"
      url = ""/>
      <User 
      name = "Gowsi"
      url = ""/> */}

      {/* {users.map((usr)=>(<User name={usr.name} url={usr.url}/>))} */}
      <Counter/>
    </div>
  );
}

// user component (declaration)
function Counter(){
  let like = 10;
  return(
    <div>
      <button>Like</button>
      <p>{like}</p>
    </div>
  )
}
function Welcome({name}){
  return(
    <section>
      <h1>Hello, {name}</h1>
    </section>
  )
}

function User({url, name}) {

  //const {pic, name}=props; //object destructuring in JS ES6
  return(
    <section>
      <img src={url} alt={name}/>
      <h1>Hi, <span className='name_app'>{name}</span></h1>
    </section> 
  );
}
export default App;
