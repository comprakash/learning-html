import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Bengaluru",
  country: "India"
}

function Hello() {
  return <h1>Welcome to React!</h1>;
}

ReactDOM.render(
  <div>
    <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>
    <Hello />
  </div>, 
  document.getElementById('root')
);
