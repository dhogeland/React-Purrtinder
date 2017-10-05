import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoButton from '../../Images/logoButton.png';

class Logo extends Component {
  render() {
    return (
      <span>
        <Link to="/">
          <img className="logo-button"
                src={logoButton}
                alt={"silhouette of cat playing with yarn"}
          />
        </Link>
      </span>
    )
  }
}

export default Logo;
