import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iHateThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import nopeButton from '../../Images/nopeButton.png';

class NopeButton extends Component {
  constructor(props) {
    super(props);
    this.handleNope = this.handleNope.bind(this);
  }
  handleNope() {
    const picture = this.props.picturesList;
    this.props.iHateThis(picture[picture.length - 1]);
    this.props.getCatPictures();
  }
  render() {
    return (
      <span>
        <button onMouseDown={e => e.preventDefault()}
                onClick={this.handleNope}
          >
          <img className="nope-button"
                src={nopeButton}
                alt={"red X button"}
          />
        </button>
      </span>
    )
  }
}

function mapStateToProps({thePictures}) {
  return {
     picturesList: thePictures.myPictures,
  }
}
const mapDispatchToProps = {
  iHateThis,
  getCatPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(NopeButton);
