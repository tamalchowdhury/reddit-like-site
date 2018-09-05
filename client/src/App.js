import React, { Component } from 'react';
import Textbox from './components/Textbox';
import Post from './components/Post';
import './styles/style.css';
import data from './data';

class App extends Component {
  state = {
    messages: []
  };

  // componentDidMount() {
  //   fetch('./api/all')
  //     .then((res) => res.json())
  //     .then((messages) => {
  //       this.setState({ messages });
  //     });
  // }

  componentDidMount() {
    this.setState({ messages: data.data.children });
  }

  render() {
    return (
      <div className="app">
        <div className="header">Header</div>
        <div className="container">
          <div className="posts">
            {this.state.messages.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
          <div className="user">User</div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
