import React, { Component } from 'react';

import './SuperLike.css';

import superLikeButton from '../../Images/superLikeButton.png';

class SuperLike extends Component {

  render() {
    return (
      <div>
        <img
          className="super-like-button"
          src={superLikeButton}
          alt={"blue lighting bolt button"}
        />
      </div>
    )
  }
}

export default SuperLike;
