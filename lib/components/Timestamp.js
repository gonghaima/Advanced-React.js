import React, { Component } from 'react';

class Timestamp extends Component {
    state = {}
    render() {
      return (
        <div>
          {this.props.timestamp.toString()}
        </div>
      );
    }
}

export default Timestamp;