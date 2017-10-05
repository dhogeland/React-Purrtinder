import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCatPictures } from '../../Actions/actions';
import NavBar from '../NavBar/NavBar';
import Cats from '../Cats/Cats';
import Footer from '../Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picturesList: []
    }
  }

  componentWillMount() {
    this.props.getCatPictures()
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
  getCatPictures
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
