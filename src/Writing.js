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
      <span className="description">{this.props.desc}</span>
      <span className="title">{this.props.title}</span>
      <span className="date">{this.props.date}</span>
    </a>);
  }
}

class Writing extends Component {
  constructor(props) {
    super(props);
    
    this.writing = [
      {
        desc: 'I briefly explore how mindfulness as a practice adds value to the processes surrounding the creation of product.',
        date: 'December 3rd, 2016',
        title: 'On Mindfulness & Product', 
        link: 'http://telegra.ph/On-Mindfulness--Product-12-03' },
      { 
        desc: 'I consider the shortening of our cultural attention span, how we should frame it, and what it might mean for communication in a couple of decades.',
        date: 'December 19th, 2016',
        title: 'On Attention Span', 
        link: 'http://telegra.ph/On-Attention-Span-12-19' },
      { 
        desc: 'I discuss the importance of paying attention to when changes in the zeitgeist conflict with human fundamentals, and the unexpected inevitabilities that can be expected based on them.',
        date: 'February 12th, 2017',
        title: 'On Inevitabilities', 
        link: 'http://telegra.ph/On-Inevitabilities-02-12' },
      { 
        desc: 'I outline creative platforms and the mechanisms by which they democratize various forms of creativity. I then attempt to extrapolate common principles that might assist in democratizing other forms.',
        date: 'December 27th, 2017',
        title: 'On Democratization of Creativity', 
        link: 'http://telegra.ph/On-Democratization-Of-Creativity-12-27' }
    ];
  
  }

  render() {
    const posts = this.writing.map(post => {
      return <Post link={post.link} title={post.title} date={post.date} desc={post.desc}/>;
    }).reverse();

    return (
      <div className={`Writing fadeIn nonInit ${this.props.className}`}>
        {posts}
      </div>
    )
  }
}

export default Writing;
