import React, { Component } from 'react';

import { connect } from 'react-redux';
import { iSuperLikeThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import './SuperLike.css';

import superLikeButton from '../../Images/superLikeButton.png';

class SuperLike extends Component {
  constructor(props) {
    super(props);
    this.handleSuperLike = this.handleSuperLike.bind(this);
  }

  handleSuperLike() {
    const picture = this.props.picturesList;
    this.props.iSuperLikeThis(picture[picture.length - 1]);
    this.props.getHumanPictures();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleSuperLike}
          >
          <img
            className="super-like-button"
            src={superLikeButton}
            alt={"blue lighting bolt button"}
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
  iSuperLikeThis,
  getCatPictures,
  getHumanPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperLike);
