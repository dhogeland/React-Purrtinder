import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iLikeThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import likeButton from '../../Images/likeButton.jpeg';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }
  handleLike() {
    const picture = this.props.picturesList;
    this.props.iLikeThis(picture[picture.length - 1]);
    this.props.getCatPictures();
  }
  render() {
    return (
      <span>
        <button onMouseDown={e => e.preventDefault()}
                onClick={this.handleLike}
          >
          <img className="like-button-pic"
                src={likeButton}
                alt={"green heart button"}
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
  iLikeThis,
  getCatPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
