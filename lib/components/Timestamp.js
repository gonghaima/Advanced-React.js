import React, { PureComponent } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends PureComponent {
  timeDisplay = (timestamp) => timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  shouldComponentUpdate(nextProps){
    return this.timeDisplay(this.props.timestamp)!==this.timeDisplay(nextProps.timestamp);
  }
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);