import React, { Component } from 'react';

import './Like.css';

import likeButton from '../../Images/likeButton.jpeg';

class Like extends Component {

  render() {
    return (
      <div>
        <img
          className="like-button-pic"
          src={likeButton}
          alt={"green heart button"}
        />
      </div>
    )
  }
}

export default Like;
