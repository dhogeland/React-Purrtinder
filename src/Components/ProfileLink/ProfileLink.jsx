import React, { Component } from 'react';

import './ProfileLink.css';

import profileLinkButton from '../../Images/profileLinkButton.png';

class ProfileLink extends Component {

  render() {
    return (
      <div>
        <img
          className="profile-link-button"
          src={profileLinkButton}
          alt={"silhouette of cat"}
        />
      </div>
    )
  }
}

export default ProfileLink;
