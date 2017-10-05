import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import favoriteButton from '../../Images/favoriteButton.png';

class FavoriteButton extends Component {
  render() {
    return (
      <span>
        <Link to="/favorites">
          <img className="favorite-button"
                src={favoriteButton}
                alt={"black star button"}
          />
        </Link>
      </span>
    )
  }
}

export default FavoriteButton;
