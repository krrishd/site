import React, { Component } from 'react';
import {
  Link,
  browserHistory
} from 'react-router';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<a
      href={this.props.link}
      target="_blank"
      className="Post">
      <span>{this.props.title}</span>
    </a>);
  }
}

class Writing extends Component {
  constructor(props) {
    super(props);
    
    this.writing = [
      { title: 'On Mindfulness & Product', link: 'http://telegra.ph/On-Mindfulness--Product-12-03' },
      { title: 'On Attention Span', link: 'http://telegra.ph/On-Attention-Span-12-19' },
      { title: 'On Inevitabilities', link: 'http://telegra.ph/On-Inevitabilities-02-12' },
      { title: 'On Democratization of Creativity', link: 'http://telegra.ph/On-Democratization-Of-Creativity-12-27' }
    ];
  
  }

  render() {
    const posts = this.writing.map(post => {
      return <Post link={post.link} title={post.title} />;
    }).reverse();

    return (
      <div className={`Writing fadeIn nonInit ${this.props.className}`}>
        {posts}
      </div>
    )
  }
}

export default Writing;
