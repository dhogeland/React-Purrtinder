import React, { Component } from 'react';

import './Nope.css';

import nopeButton from '../../Images/nopeButton.png';

class Nope extends Component {

  render() {
    return (
      <div>
        <img
          className="nope-button"
          src={nopeButton}
          alt={"red X button"}
        />
      </div>
    )
  }
}

export default Nope;
