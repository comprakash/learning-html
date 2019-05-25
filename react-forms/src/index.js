import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";

import * as serviceWorker from './serviceWorker';
import './index.css';

import reducer01 from "./reducers/reducer01";
import showResults from "./components/show-results/show-results";
import UserRegForm from "./components/user-registration-form/user-registration-form";



const rootEl = document.getElementById("root");
const store = createStore(reducer01);


ReactDOM.render(
  <Provider store={store}>

    <section>
 
      <div style={{ padding: 15, backgroundColor: 'salmon' }}>
        <h2 className="mytitle">User Registration Form 01</h2>
        <UserRegForm onSubmit={showResults} />
        <aside>
          <Values form="myform" />
        </aside>
      </div> <hr /> 


</section>

  </Provider>,
  rootEl
);


serviceWorker.unregister();