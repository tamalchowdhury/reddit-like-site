import React, { Component } from 'react';

export default class Textbox extends Component {
  sendMessage = (e) => {
    e.preventDefault();
    let text = e.target.message.value;

    fetch('/api/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: text
      })
    });
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.sendMessage} action="">
          <textarea name="message" id="" cols="30" rows="10" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
