import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCatPictures } from '../../Actions/actions';
import refreshButton from '../../Images/refreshButton.png';

class RefreshButton extends Component {
  render() {
    return (
      <span>
        <button onMouseDown={e => e.preventDefault()}
                onClick={this.props.getCatPictures}
          >
            <img className="refresh-button"
                  src={refreshButton}
                  alt={"refresh button"}
          />
        </button>
      </span>
    )
  }
}

const mapDispatchToProps = {
  getCatPictures
}
export default connect(null, mapDispatchToProps)(RefreshButton);
