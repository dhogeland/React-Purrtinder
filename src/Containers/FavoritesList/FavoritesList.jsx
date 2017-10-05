import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import LikeList from '../../Components/LikeList/LikeList';
import SuperLikeList from '../../Components/SuperLikeList/SuperLikeList';

class FavoritesList extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <div className="favorites-list-main-div">
            <h1>Here are a few of your favorite things...</h1>
            <LikeList/>
            <SuperLikeList/>
          </div>
      </div>
    )
  }
}

export default FavoritesList;
