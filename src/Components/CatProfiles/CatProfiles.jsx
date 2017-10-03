import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import './CatProfiles.css';

class CatProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      picturesList: this.props.picturesList
    }
  }
  // componentWillMount() {
  //   //setting up random people pictures due to Unsplash 50 call API limit
  //   this.props.getCatPictures()
  //     .then(response => {
  //       console.log(response.value.data)
  //       this.setState({picturesList: [...this.state.picturesList, {
  //         description: response.value.data.description,
  //         id: response.value.data.id,
  //         link: response.value.data.user.links.html,
  //         name: response.value.data.user.name,
  //         picture: response.value.data.urls.small
  //       }]
  //     })
  //   })
  // }

  render() {
    console.log("props", this.props.picturesList)
    return (
      <div className="main-cat-profile-div">
        {
          this.props.picturesList[0]
          ?
          <div className="cat-profile-pic-div">
            <img
              className="cat-pic-img"
              src={this.props.picturesList[this.props.picturesList.length - 1].picture.large}
              //src={this.props.picturesList[this.props.picturesList.length - 1].urls.small}
              // alt={this.state.picturesList[0].description}
            />
            <div className="cat-profile-pic-credit-div">
              &lt;Photo by
              {/* <a
                target="_blank"
                href={`${this.state.picturesList[0].link}${this.state.creditToUnsplash}`}
                > {this.state.picturesList[0].name}
              </a> /
              <a
                target="_blank"
                href={`https://unsplash.com${this.state.creditToUnsplash}`}
                > Unsplash
              </a> */}
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

function mapStateToProps({humanPictures}) {
  return {
     picturesList: humanPictures.myPictures,
  }
}
const mapDispatchToProps = {
  getCatPictures,
  getHumanPictures
}
export default connect(mapStateToProps, mapDispatchToProps)(CatProfiles);
