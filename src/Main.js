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
              name: this.makeShortEnough(res.body.name)
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

  makeShortEnough(title) {
    if (title.length < 24) {
      return title;
    }

    let featuresRemoved = title.split('(')[0];

    if (featuresRemoved.length < 24) {
      return featuresRemoved;
    }

    return featuresRemoved.slice(0, 23);
  }

  render() {
    return (
      <div className="header Music fadeIn">
        <img src={this.state.song.art} />
        <div className="meta">
          <p className="name">
            <img src='/img/eq.gif' className="loading"/>
            <span>{this.state.song.name}</span>
          </p>
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
      <div className={`Main ${this.props.className}`}>
        <div className="ting title fadeIn">
          <h3 className="cool">who am i?</h3>
          <p>i'm a designer / developer based in boulder, co</p>
        </div>
        <div className="ting where fadeIn">
          <h3 className="cool">what have i been up to?</h3>
          <p>studying <a href="//github.com/krrishd/academic-plan#2017-2018"><span>CS + cognitive science</span></a> @ cu boulder</p>
          <p>taking on new freelance projects for, taking products from design to deployment</p>
          <p>formerly an intern @ <a href="//sendgrid.com" target="_blank"><span>sendgrid</span></a>, co-founder @ <a href="//slice.capital"><span>slice.capital</span></a>, <a href="http://pennappsfellows.com" target="_blank"><span>pennapps fellow</span></a></p>
        </div>
        <div className="ting other fadeIn">
          <h3 className="cool">where else can i be found?</h3>
          <ul className="links">
            <li><a href="/r.pdf"><span>résumé</span></a></li>
            <li><a className="gh" href="//git.io/krish"><span>github</span></a></li>
            <li><a className="ln" href="//linkedin.com/in/krishdholakiya"><span>linkedin</span></a></li>
            <li><a className="sc" href="//soundcloud.com/krish-dholakiya"><span>soundcloud</span></a></li>
          </ul>
        </div>
        <div className="ting hmu fadeIn">
          <h3 className="cool">how to get in touch</h3>
          <p>email krdh0184@colorado.edu and we can talk :)</p>
        </div>
        <Music api={this.props.api}/>
      </div>
    );
  }
}

export default Main;
