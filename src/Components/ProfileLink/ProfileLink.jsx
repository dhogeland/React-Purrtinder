import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProfileLink.css';

import profileLinkButton from '../../Images/profileLinkButton.png';

class ProfileLink extends Component {

  render() {
    return (
      <div>
        <Link to="/user">
          <img
            className="profile-link-button"
            src={profileLinkButton}
            alt={"silhouette of cat"}
          />
        </Link>
      </div>
    )
  }
}

export default ProfileLink;
