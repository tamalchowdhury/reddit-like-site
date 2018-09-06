import React, { Component } from 'react';
import Textbox from './components/Textbox';
import Post from './components/Post';
import Postbox from './components/Postbox';
import './styles/style.css';
import data from './newdata';

class App extends Component {
  state = {
    messages: [],
    updated: false
  };

  postToDatabase(post) {
    fetch('./api/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(this.setState({ updated: false }));
  }

  newPost = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;

    if (title) {
      // let messages = [...this.state.messages];
      let data = {};
      data.title = title;
      data.body = body;
      data.author = 'Me';
      data.posted = Date.now();
      data.votes = 1;

      // messages.push(data);
      // this.setState({ messages });
      this.postToDatabase(data);

      e.target.reset();
    }

    console.log(title);
  };

  vote = (key, index, isUpvote) => {
    let messages = [...this.state.messages];
    let votes = messages[index].votes;
    if (isUpvote) {
      votes++;
    } else {
      votes--;
    }
    let id = key;

    fetch('./api/vote', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, votes })
    })
      .then((res) => this.setState({ messages, updated: false }))
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  };

  upVote = (key, index) => {
    let messages = [...this.state.messages];
    let votes = messages[index].votes;
    votes++;
    let id = key;

    fetch('./api/vote', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, votes })
    })
      .then((res) => this.setState({ messages, updated: false }))
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  };

  downVote = (key) => {
    let messages = [...this.state.messages];
    messages[key].votes--;
    this.setState({ messages });
  };

  componentDidUpdate() {
    if (!this.state.updated) {
      fetch('./api/all')
        .then((res) => res.json())
        .then((messages) => {
          this.setState({ messages, updated: true });
        });
    }
  }

  componentDidMount() {
    fetch('./api/all')
      .then((res) => res.json())
      .then((messages) => {
        this.setState({ messages, updated: true });
      });
  }

  render() {
    return (
      <div className="app">
        <div className="header">Header</div>
        <div className="container">
          <div className="posts">
            {this.state.messages.map((post, index) => (
              <Post key={post._id} index={index} post={post} vote={this.vote} />
            ))}
          </div>
          <div className="user">
            <Postbox newPost={this.newPost} />
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
