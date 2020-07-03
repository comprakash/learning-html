import React, { useState } from 'react';
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
  const [status, setStatus] = useState("Open");
  return (
    <>
      <h1>India's Biggest Lakes</h1>
      <ul>
        {lakes.map((lake) => <li key={lake}>{lake}</li>)}
      </ul>
      <h1>App Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />, 
  document.getElementById('root')
);
