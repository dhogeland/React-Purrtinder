import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import messagesLinkButton from '../../Images/messagesLinkButton.png';

class MessagesLink extends Component {
  render() {
    return (
      <span>
        <Link to="/messages">
          <img className="messages-link-button"
                src={messagesLinkButton}
                alt={"silhouette of cat paw prints"}
          />
        </Link>
      </span>
    )
  }
}

export default MessagesLink;
