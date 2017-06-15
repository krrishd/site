import React, { Component } from 'react';
import request from 'superagent';
import {
  Link,
  browserHistory
} from 'react-router';

class WorkThumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        to={`/work/${this.props.id}`}
        className="WorkThumb">
        <img src={this.props.img} />
      </Link>
    );
  }
}

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: (() => {
        if (!sessionStorage || !sessionStorage.preloadedWork) return null;
        return this.rawToThumb(JSON.parse(sessionStorage.preloadedWork));
      })()
    }

    if (!this.state.work) {
      request
        .get(this.props.api)
        .end((err, res) => {
          const rawWork = res.body.work;
        
          const workThumbs = this.rawToThumb(rawWork);
        
          this.setState({
            work: workThumbs
          }, () => {
            try {
              sessionStorage.preloadedWork = JSON.stringify(rawWork);
            } catch(e) {
              throw e;
            }
          });
      });
    }
  }

  rawToThumb(rawWork) {
    return rawWork.map(item => {
      return (
          <WorkThumb
            api={this.props.api}
            img={item.img}
            id={btoa(item.name)} />
      );
    });
  }

  render() {
    return (
      <div className={`Work fadeIn nonInit ${this.props.className}`}>
        {this.state.work}
      </div>
    );
  }
}

export default Work;

