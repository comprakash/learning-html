import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  "Chilka Lake",
  "Vembanad Lake",
  "Shivaji Sagar Lake",
  "Indira Sagar Lake",
  "Pangong Lake"
]

function App({lakes}) {
  return (
    <>
      <h1>India's Biggest Lakes</h1>
      <ul>
        {lakes.map((lake) => <li key={lake}>{lake}</li>)}
      </ul>
    </>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />, 
  document.getElementById('root')
);
