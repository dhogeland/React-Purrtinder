import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import tigger from '../../Images/tigger.jpeg';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="main-user-profile-div">
          <div>
            <h1>Hundred Acre Wood</h1>
            <img className="user-profile-image"
                  src={tigger}
                  alt={"Tigger"}
            />
            <h1>Go get em' Tigger</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
