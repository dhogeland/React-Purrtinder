import React, { Component } from 'react';
import RefreshButton from '../../Components/RefreshButton/RefreshButton';
import NopeButton from '../../Components/NopeButton/NopeButton';
import SuperLikeButton from '../../Components/SuperLikeButton/SuperLikeButton';
import LikeButton from '../../Components/LikeButton/LikeButton';
import FavoriteButton from '../../Components/FavoriteButton/FavoriteButton';

class Footer extends Component {

  render() {
    return (
      <div className="main-footer-div">
        <RefreshButton/>
        <NopeButton/>
        <SuperLikeButton/>
        <LikeButton/>
        <FavoriteButton/>
      </div>
    )
  }
}

export default Footer;
