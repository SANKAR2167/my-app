import { Counter } from "./Counter";

export function User({ url, name }) {

  //const {pic, name}=props; //object destructuring in JS ES6
  return (
    <section>
      <img src={url} alt={name} />
      <h1>Hi, <span className='name_app'>{name}</span></h1>
      <Counter />
    </section>
  );
}
