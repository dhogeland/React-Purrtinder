import React, { Component } from 'react';
import { connect } from 'react-redux';

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      likedPictures: this.sortedLikes()
    }
    this.sortedLikes = this.sortedLikes.bind(this);
  }
  sortedLikes() {
    return this.props.picturesList.filter(picture => {
      return picture.type === "I_LIKE_THIS";
    })
  }
  render() {
    return (
      <div>
        {
          this.state.likedPictures.length > 0
            ?
            this.state.likedPictures.map(picture => {
      return <div key={picture.id}
                  className="favorites-list-likes-div">
              <h3>I Like This One!</h3>
              <img className="cat-pic-img"
                    src={picture.urls.small}
                    alt={picture.description}
              />
              <div className="cat-profile-pic-credit-div">
                &lt;Photo by
                <a target="_blank"
                    rel="noopener noreferrer"
                    href={`${picture.user.links.html}${this.state.creditToUnsplash}`}
                  > {picture.user.name}
                </a> /
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://unsplash.com?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit"
                  > Unsplash
                </a>
                  &gt;
                </div>
              </div>
            })
          :
          <div>
            <h3>You have not Liked any pictures.</h3>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({thePictures}) {
  return {
     picturesList: thePictures.myPictures,
  }
}

export default connect(mapStateToProps, null)(LikeList);
