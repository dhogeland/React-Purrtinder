import React, { Component } from 'react';
import ProfileLink from '../../Components/ProfileLink/ProfileLink';
import Logo from '../../Components/Logo/Logo';
import MessagesLink from '../../Components/MessagesLink/MessagesLink';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-main-div">
        <ProfileLink/>
        <Logo/>
        <MessagesLink/>
      </div>
    )
  }
}

export default NavBar;
