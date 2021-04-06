import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Players from './src/pages/Players';
import Navbar from './src/components/navbar';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/players' component={Players} />
      
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
