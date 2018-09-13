import React, { Component, Fragment } from 'react';
import Postbox from './Postbox';
import Login from './Login';

export default class User extends Component {
  render() {
    return (
      <Fragment>
        <Postbox newPost={this.props.newPost} />
      </Fragment>
    );
  }
}
