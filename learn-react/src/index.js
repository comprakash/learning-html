import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Bengaluru",
  country: "India"
}

function Hello({library, message, number}) {
  console.log(library, message, number);
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number} Props Total</p>
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
