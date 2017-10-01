import React, { Component } from 'react';

import './Favorite.css';

import favoriteButton from '../../Images/favoriteButton.png';

class Favorite extends Component {

  render() {
    return (
      <div>
        <img
          className="favorite-button"
          src={favoriteButton}
          alt={"black star button"}
        />
      </div>
    )
  }
}

export default Favorite;
