import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuperLikeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      superLiked: this.sortedSuperLikes()
    }
    this.sortedSuperLikes = this.sortedSuperLikes.bind(this);
  }
  sortedSuperLikes() {
    return this.props.picturesList.filter(picture => {
      return picture.type === "I_SUPERLIKE_THIS";
    })
  }
  render() {
    return (
      <div>
        {
          this.state.superLiked.length > 0
            ?
            this.state.superLiked.map(picture => {
    return <div key={picture.id}
                className="favorites-list-super-likes-div">
              <h3>I SUPER LIKE THIS ONE!!!</h3>
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
            <h3>You have not Super Liked any pictures.</h3>
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
export default connect(mapStateToProps, null)(SuperLikeList);
