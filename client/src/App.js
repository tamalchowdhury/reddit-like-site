import React, { Component } from 'react';
import Textbox from './components/Textbox';
import Post from './components/Post';
import User from './components/User';
import Postbox from './components/Postbox';
import Login from './components/Login';

import './styles/style.css';
import data from './newdata';

class App extends Component {
  state = {
    messages: [],
    loggedIn: false,
    username: '',
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

  login = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    if (username) {
      fetch('/api/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      })
        .then((res) => {
          if (res.status === 200) {
            this.setState({ loggedIn: true, username });
            localStorage.setItem('username', username);
          }
        })
        .catch((e) => null);
    }

    console.log('Logging in!');
  };

  newPost = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;

    if (title) {
      let data = {};
      data.title = title;
      data.body = body;
      data.author = this.state.username || 'User';
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
    let username = localStorage.getItem('username') || '';

    fetch('./api/all')
      .then((res) => res.json())
      .then((messages) => {
        this.setState({ username, messages, loggedIn: true, updated: true });
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
            {this.state.loggedIn ? (
              <Postbox newPost={this.newPost} />
            ) : (
              <Login login={this.login} />
            )}
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
