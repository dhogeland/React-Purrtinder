import React, { Component } from 'react';

import { connect } from 'react-redux';
import { iLikeThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import './Like.css';

import likeButton from '../../Images/likeButton.jpeg';

class Like extends Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const picture = this.props.picturesList;
    this.props.iLikeThis(picture[picture.length - 1]);
    this.props.getHumanPictures();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleLike}
          >
          <img
            className="like-button-pic"
            src={likeButton}
            alt={"green heart button"}
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
  iLikeThis,
  getCatPictures,
  getHumanPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
