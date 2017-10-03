import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MessagesLink.css';

import messagesLinkButton from '../../Images/messagesLinkButton.png';

class MessagesLink extends Component {

  render() {
    return (
      <div>
        <Link to="/messages">
          <img
            className="messages-link-button"
            src={messagesLinkButton}
            alt={"silhouette of cat paw prints"}
          />
        </Link>
      </div>
    )
  }
}

export default MessagesLink;
