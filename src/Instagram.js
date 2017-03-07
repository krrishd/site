import React, { Component } from 'react';
import request from 'superagent';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<a
      href={this.props.image.link}
      className="Image">
      <img src={this.props.image.thumb} />
    </a>); 
  }
}

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null
    };

    const API_URL = this.props.api;
    request
      .get(API_URL)
      .end((err, res) => {
        const rawPictures = res.body.slice(0,9);      
        const condensedPictures = rawPictures.map((pic, index) => {
          const image = {
            thumb: pic.images.low_resolution.url,
            link: pic.link
          };
          return <Image
            image={image}
            key={index} />;
        });
        
        this.setState({
          pictures: condensedPictures
        });
      });
  }
    
  render() {
    return (
      <div className="Instagram">
        <h2 className="header">
          <span>📷</span>
        </h2>
        <div className="pictures">
          {this.state.pictures}
        </div>
      </div>
    );
  }
}

export default Instagram;
