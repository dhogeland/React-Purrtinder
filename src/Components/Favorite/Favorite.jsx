import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Favorite.css';

import favoriteButton from '../../Images/favoriteButton.png';

class Favorite extends Component {

  render() {
    return (
      <div>
        <Link to="/favorites">
          <img
            className="favorite-button"
            src={favoriteButton}
            alt={"black star button"}
          />
        </Link>
      </div>
    )
  }
}

export default Favorite;
