import React, { Component } from 'react';
import request from 'superagent';
import ReactMarkdown from 'react-markdown';
import {
  Link,
  browserHistory
} from 'react-router';

class WorkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meta: (() => {
        if (sessionStorage.preloadedWork) {
          const parsedWork = JSON.parse(sessionStorage.preloadedWork);
          return this.getRelevantItem(parsedWork);
        }
        return null;
      }),
      content: null
    }

    request
      .get(this.props.route.api)
      .end((err, res) => {
        const relevantItem = this.getRelevantItem(res.body.work)
        this.setState({
          meta: relevantItem
        }, () => {
          sessionStorage.preloadedWork = JSON.stringify(res.body.work);
          this.getMarkdown(relevantItem.md, (err, md) => {
            if (err) throw err;
            console.log(md);
            this.populateMarkdown(md);
          })
        });
      });
  }

  getRelevantItem(work) {
    return work.find(item => {
      return (item.name === atob(this.props.params.id));
    });
  }

  getMarkdown(filename, callback) {
    request
      .get(`/work-raw/${filename}.md`)
      .end((err, res) => {
        if (err) return callback(err, null);
        return callback(null, res.text);
      });
  }

  populateMarkdown(md) {
    this.setState({
      content: <ReactMarkdown source={md} className="fadeIn"/>
    })
  }

  render() {

    return (
      <div className="WorkItem">
        <Link
          to='/'
          className='back'>&lt;-</Link>
        {this.state.content}
      </div>
    );
  }
}

export default WorkItem;
