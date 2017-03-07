import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import WorkItem from './WorkItem';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route
      api='/work.json'
      path='/work/:id'
      component={WorkItem} />
  </Router>,
  document.getElementById('root')
);
