import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iSuperLikeThis } from '../../Actions/actions';
import { getCatPictures } from '../../Actions/actions';
import superLikeButton from '../../Images/superLikeButton.png';

class SuperLikeButton extends Component {
  constructor(props) {
    super(props);
    this.handleSuperLike = this.handleSuperLike.bind(this);
  }

  handleSuperLike() {
    const picture = this.props.picturesList;
    this.props.iSuperLikeThis(picture[picture.length - 1]);
    this.props.getCatPictures();
  }

  render() {
    return (
      <span>
        <button onMouseDown={e => e.preventDefault()}
                onClick={this.handleSuperLike}
          >
          <img className="super-like-button"
                src={superLikeButton}
                alt={"blue lighting bolt button"}
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
  iSuperLikeThis,
  getCatPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperLikeButton);
