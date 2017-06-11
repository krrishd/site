import React, { Component } from 'react';
import request from 'superagent';
import {
  Link,
  browserHistory
} from 'react-router';

class WorkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meta: {
        name: "Loading...",
        description: "Loading...",
        img: "",
        link: "#"
      }
    }

    const id = this.props.params.id;

    request
      .get(this.props.route.api)
      .end((err, res) => {
        const relevantItem = res.body.work.find(item => {
          return (item.name === atob(id));
        });

        this.setState({
          meta: relevantItem
        });
      });
  }

  render() {

    return (
      <div className="WorkItem fadeIn">
        <Link
          href='/'
          className='back'>&lt;-</Link>
        <img src={this.state.meta.img} />
        <h2 className="header"><span>{this.state.meta.name}</span></h2>
        <p className="description">{this.state.meta.description}</p>
        {
          this.state.meta.link ?
            <a href={this.state.meta.link}>check it out</a> :
            null
        }
      </div>
    );
  }
}

export default WorkItem;
