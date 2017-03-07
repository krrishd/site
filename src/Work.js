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
        href={`/work/${this.props.id}`}
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
      work: null
    }

    request
      .get(this.props.api)
      .end((err, res) => {
        const rawWork = res.body.work;
        
        const workThumbs = rawWork.map(item => {
          return (
            <WorkThumb
              api={this.props.api}
              img={item.img}
              id={btoa(item.name)} />
          );
        });
        
        this.setState({
          work: workThumbs
        });
      });
  }

  render() {
    return (
      <div className="Work">
        <h2 className="header">work</h2>
        {this.state.work}
      </div>
    );
  }
}

export default Work;

