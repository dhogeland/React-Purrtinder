import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

import logoButton from '../../Images/logoButton.png';

class Logo extends Component {

  render() {
    return (
      <div>
        <Link to="/">
          <img
            className="logo-button"
            src={logoButton}
            alt={"silhouette of cat playing with yarn"}
          />
        </Link>
      </div>
    )
  }
}

export default Logo;
