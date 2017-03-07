import React, { Component } from 'react';
import request from 'superagent';

class Music extends Component {
  constructor(props) {
    super(props);

    let song;
    if (localStorage && localStorage.cachedSong) {
      song = JSON.parse(localStorage.cachedSong);
    } else {
      song = {
        art: null,
        name: 'Loading...',
        artist: 'Loading...'
      }
    }

    this.state = {
      song
    };

    const getMusic = () => {
      request
        .get(this.props.api)
        .end((err, res) => {
          this.setState({
            song: {
              art: res.body.image[1]['#text'],
              artist: res.body.artist['#text'],
              name: res.body.name
            }
          }, () => {
            try {
              localStorage.cachedSong = JSON.stringify(this.state.song);   
            } catch(e) {
              throw e;
            }
          });  
        });
    }
  
    getMusic();

    const musicRefresh = setInterval(() => { 
      getMusic();  
    }, 15000);
  }

  render() {
    return (
      <div className="header Music">
        <img src={this.state.song.art} />
        <div className="meta">
          <p className="name">{this.state.song.name}</p>
          <p className="artist">{this.state.song.artist}</p>
        </div>
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <div className="text">
          <p>I'm a software engineer who dabbles in everything from design to product.</p>
          <p>I'm going to be spending Summer 2017 as a software engineering intern @ <a href="http://sendgrid.com"><span>SendGrid</span></a>, and was a <a href="http://pennappsfellows.com"><span>PennApps Fellow</span></a> in the past.</p>
          <p>I also do freelance work -- I take on projects ranging from UI design to building product MVPs.</p>
          <p>I take interest in music (production and as a listener), politics, and other things you might see pop-up from time to time on my <a className="twitter" href="//twitter.com/krrishd"><span>twitter</span></a>.</p>
          <p>Let's talk: you can email me at <a href="mailto:krishna.dholakiya@gmail.com"><span>krishna.dholakiya@gmail.com</span></a> or DM me on Twitter. Here's my <a href="/r.pdf"><span>résumé</span></a> if that's what you're looking for.</p>
          </div>
        <Music api={this.props.api}/>
      </div>
    );
  }
}

export default Main;
