import React, { Component } from 'react';
import Main from './Main';
import Instagram from './Instagram';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <div className="App fadeIn">
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
        <Work api='/work.json' />
      </div>
    );
  }
}

export default App;
