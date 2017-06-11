import React, { Component } from 'react';
import Main from './Main';
import Instagram from './Instagram';
import Writing from './Writing';
import Work from './Work';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Navigation">
        <ul>
          <li
            className={this.props.current === 'main' ? 'selected' : ''}
            onClick={() => {
              this.props.switchCurrent('main')
          }}><span>me</span></li>
          <li
            className={this.props.current === 'work' ? 'selected' : ''}
            onClick={() => {
              this.props.switchCurrent('work')
          }}><span>work</span></li>
          <li
            className={this.props.current === 'writing' ? 'selected' : ''}
            onClick={() => {
              this.props.switchCurrent('writing')
          }}><span>writing</span></li>
          <li
            className={this.props.current === 'insta' ? 'selected' : ''}
            onClick={() => {
              this.props.switchCurrent('insta')
          }}><img src='/camera.png' width='35px' /></li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      current: 'main'
    };
  }

  switchCurrent = (newCurrent) => {
    this.setState({
      current: newCurrent
    });
  }

  render() {
    return (
      <div className="App fadeIn">
        <img src='/me.jpg' className="me" />
        <h1 className="header main fadeIn">
          <span>krish dholakiya</span>
        </h1>
        <div className="top">
          <Main
            api='http://krish-api.herokuapp.com/api/last'
            className={this.state.current === 'main' ? '' : 'hidden'}/>
          <Instagram
            api='http://krish-api.herokuapp.com/api/insta'
            className={this.state.current === 'insta' ? '' : 'hidden'}/>
        </div>
        <Writing className={this.state.current === 'writing' ? '' : 'hidden'}/>
        <Work
          api='/work.json'
          className={this.state.current === 'work' ? '' : 'hidden'}/>
        <Navigation
          current={this.state.current}
          switchCurrent={this.switchCurrent} />
      </div>
    );
  }
}

export default App;
