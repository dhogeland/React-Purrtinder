import React, { Component } from 'react';

import './Footer.css';

import Refresh from '../../Components/Refresh/Refresh';
import Nope from '../../Components/Nope/Nope';
import SuperLike from '../../Components/SuperLike/SuperLike';
import Like from '../../Components/Like/Like';
import Favorite from '../../Components/Favorite/Favorite';

class Footer extends Component {

  render() {
    return (
      <div className="main-footer-div">
        <Refresh/>
        <Nope/>
        <SuperLike/>
        <Like/>
        <Favorite/>
      </div>
    )
  }
}

export default Footer;
