import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCatPictures } from '../../Actions/actions';

class CatProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      picturesList: this.props.picturesList
    }
  }
  render() {
    return (
      <div className="main-cat-profile-div">
        {
          this.props.picturesList[0]
          ?
          <div className="cat-profile-pic-div">
            <img className="cat-pic-img"
                  src={this.props.picturesList[this.props.picturesList.length - 1].urls.small}
                  alt={this.props.picturesList[this.props.picturesList.length - 1].description}
            />
            <div className="cat-profile-pic-credit-div">
              &lt;Photo by
              <a target="_blank"
                  rel="noopener noreferrer"
                  href={`${this.props.picturesList[this.props.picturesList.length - 1].user.links.html}${this.state.creditToUnsplash}`}
                > {this.props.picturesList[this.props.picturesList.length - 1].user.name}
              </a> /
              <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://unsplash.com?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit"
                > Unsplash
              </a>
                &gt;
           </div>
          </div>
          :
          null
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
const mapDispatchToProps = {
  getCatPictures
}
export default connect(mapStateToProps, mapDispatchToProps)(CatProfiles);
