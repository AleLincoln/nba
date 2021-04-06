import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Players from './src/pages/Players';
import Navbar from './src/components/navbar';
import Teams from './src/pages/Teams';
import Games from './src/pages/Games';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/players' component={Players} />
      <Route path='/teams' component={Teams} />
      <Route path='/games' component={Games} />
      
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
