import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileLinkButton from '../../Images/profileLinkButton.png';

class ProfileLink extends Component {
  render() {
    return (
      <span>
        <Link to="/user">
          <img className="profile-link-button"
                src={profileLinkButton}
                alt={"silhouette of cat"}
          />
        </Link>
      </span>
    )
  }
}

export default ProfileLink;
