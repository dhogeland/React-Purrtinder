import React, { Component } from 'react';

import { connect } from 'react-redux';
import { iHateThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import './Nope.css';

import nopeButton from '../../Images/nopeButton.png';

class Nope extends Component {
  constructor(props) {
    super(props);
    this.handleNope = this.handleNope.bind(this);
  }

  handleNope() {
    const picture = this.props.picturesList;
    this.props.iHateThis(picture[picture.length - 1]);
    this.props.getHumanPictures();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleNope}
          >
          <img
            className="nope-button"
            src={nopeButton}
            alt={"red X button"}
          />
        </button>
      </div>
    )
  }
}

function mapStateToProps({humanPictures}) {
  return {
     picturesList: humanPictures.myPictures,
  }
}
const mapDispatchToProps = {
  iHateThis,
  getCatPictures,
  getHumanPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(Nope);
