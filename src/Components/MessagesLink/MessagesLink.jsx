import React, { Component } from 'react';

import './MessagesLink.css';

import messagesLinkButton from '../../Images/messagesLinkButton.png';

class MessagesLink extends Component {

  render() {
    return (
      <div>
        <img
          className="messages-link-button"
          src={messagesLinkButton}
          alt={"silhouette of cat paw prints"}
        />
      </div>
    )
  }
}

export default MessagesLink;
