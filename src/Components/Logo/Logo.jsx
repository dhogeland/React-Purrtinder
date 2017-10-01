import React, { Component } from 'react';

import './Logo.css';

import logoButton from '../../Images/logoButton.png';

class Logo extends Component {

  render() {
    return (
      <div>
        <img
          className="logo-button"
          src={logoButton}
          alt={"silhouette of cat playing with yarn"}
        />
      </div>
    )
  }
}

export default Logo;
