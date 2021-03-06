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
      <div className="WorkThumbContainer">
        <Link
          to={`/work/${this.props.id}`}
          className="WorkThumb">
          
          <img src={this.props.img} />
        </Link>
        <ul className="tags">
          {this.props.tags && this.props.tags.map(tag => <li>{tag}</li>)}
        </ul>
      </div>
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
            id={item.md}
            tags={item.tags} />
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

