import React, { Component } from 'react';

import './Refresh.css';

import { connect } from 'react-redux';
import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import refreshButton from '../../Images/refreshButton.png';

class Refresh extends Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.getHumanPictures}
          >
            <img
            className="refresh-button"
            src={refreshButton}
            alt={"refresh button"}
          />
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getCatPictures,
  getHumanPictures
}
export default connect(null, mapDispatchToProps)(Refresh);
