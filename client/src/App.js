import React, { Component } from 'react';
import Textbox from './components/Textbox';
import './styles/style.css';

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

  render() {
    return (
      <div className="app">
        <div className="header">Header</div>
        <div className="container">
          <div className="posts">Posts</div>
          <div className="user">User</div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
