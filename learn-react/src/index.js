import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Bengaluru",
  country: "India"
}

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{props.number} Props Total</p>
      <p>{Object.keys(props).length} Object Keys</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>
    <Hello 
      library="React"
      message="and Redux..."
      number={3}
    />
  </div>, 
  document.getElementById('root')
);
