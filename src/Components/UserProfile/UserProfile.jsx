import React, { Component } from 'react';

import tigger from '../../Images/tigger.jpeg';

import './UserProfile.css';

class UserProfile extends Component {

  render() {
    return (
      <div className="main-user-profile-div">
        <div className="main-user-profile-location">
          <h1>Hundred Acre Wood</h1>
          <img
            className="user-profile-image"
            src={tigger}
            alt={"Tigger"}
          />
          <h1>Go get em'
            <span
              className="user-profile-name"
              > Tigger
            </span>
          </h1>
        </div>
      </div>
    )
  }
}

export default UserProfile;
