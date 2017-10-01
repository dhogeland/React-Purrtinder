import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import './CatProfiles.css';

class CatProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }
  componentDidMount() {
    //setting up random people pictures due to Unsplash 50 call API limit
    this.props.getHumanPictures()
      .then(response => {
        this.setState({pictures: response.value.data.picture.large})
      })
  }

  render() {
    return (
      <div className="main-cat-profile-div">
        <img
          className="cat-profile-pic"
          src={this.state.pictures}
          alt={"a cat"}
        />
      </div>
    )
  }
}

function mapStateToProps({humanPictures}) {
  return {
     pictures: humanPictures.myPictures,
  }
}
const mapDispatchToProps = {
  getCatPictures,
  getHumanPictures
}
export default connect(mapStateToProps, mapDispatchToProps)(CatProfiles);
