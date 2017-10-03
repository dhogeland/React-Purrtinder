import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';

import './FavoritesList.css';

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      picturesList: this.props.picturesList
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar/>
          <div className="favorites-list-main-div">
            Here are a few of your favorite things...
          </div>
      </div>
    )
  }
}

function mapStateToProps({humanPictures}) {
  return {
     picturesList: humanPictures.myPictures,
  }
}
// const mapDispatchToProps = {
//   getCatPictures,
//   getHumanPictures
// }
export default connect(mapStateToProps, null)(FavoritesList);
