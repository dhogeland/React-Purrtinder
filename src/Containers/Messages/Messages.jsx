import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class Messages extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="messages-div">
          Your Litterbox is empty...
        </div>
      </div>
    )
  }
}

export default Messages;
