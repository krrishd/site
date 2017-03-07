import React, { Component } from 'react';
import Main from './Main';
import Instagram from './Instagram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src='/me.jpg' className="me" />
        <h1 className="header main">
          <span>krish dholakiya</span>
        </h1>
        <div className="top">
          <Main
            api='http://krish-api.herokuapp.com/api/last' />
          <Instagram
            api='http://krish-api.herokuapp.com/api/insta' />
        </div>
      </div>
    );
  }
}

export default App;
