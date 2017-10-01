import React, { Component } from 'react';

import './Refresh.css';

import refreshButton from '../../Images/refreshButton.png';

class Refresh extends Component {

  render() {
    return (
      <div>
        <img
          className="refresh-button"
          src={refreshButton}
          alt={"refresh button"}
        />
      </div>
    )
  }
}

export default Refresh;
