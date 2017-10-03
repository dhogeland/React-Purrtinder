import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getCatPictures } from '../../Actions/actions';
import { getHumanPictures } from '../../Actions/actions';

import NavBar from '../NavBar/NavBar';
import Cats from '../Cats/Cats';
import Footer from '../Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // creditToUnsplash: "?utm_source=catinder&utm_medium=referral&utm_campaign=api-credit",
      picturesList: []
    }
  }

  componentWillMount() {
    //setting up random people pictures due to Unsplash 50 call API limit
    this.props.getHumanPictures()
      // .then(response => {
      //   // console.log(response.value.data.picture.large)
      //   this.setState({picturesList: response.value.data.urls.large})


      //   this.setState({picturesList: [...this.state.picturesList, {
      //     description: response.value.data.description,
      //     id: response.value.data.id,
      //     link: response.value.data.user.links.html,
      //     name: response.value.data.user.name,
      //     picture: response.value.data.urls.small
      //   }]
      // })


    // })
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Cats/>
        <Footer/>
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
  getCatPictures,
  getHumanPictures
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
