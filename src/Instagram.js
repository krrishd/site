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

    console.log(props);
    
    let pictures;
    if (localStorage && localStorage.cachedInsta) {
      const rawPictures = JSON.parse(localStorage.cachedInsta);
      pictures = rawPictures.map((pic, index) => {
        const image = {
          thumb: pic.images.low_resolution.url,
          link: pic.link
        };

        return <Image image={image} key={index} />;
      });
    } else {
      pictures = null;
    }
    
    this.state = {
      pictures
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
        }, () => {
          try {
            localStorage.cachedInsta = JSON.stringify(rawPictures);   
          } catch(e) {
            throw e;
          }
        });
      });
  }
    
  render() {
    return (
      <div className={`Instagram fadeIn nonInit ${this.props.className}`}>
        <div className="pictures">
          {this.state.pictures}
        </div>
      </div>
    );
  }
}

export default Instagram;
