import React from 'react';
import PropTypes from 'prop-types';
const storeProvider = (extraProps=()=>({})) => (Component) => {
  return class extends React.PureComponent{
        static displayName = `${Component.name}Container`;
        static contextTypes = {
          store: PropTypes.object,
        };

        usedState = () =>{
          return extraProps(this.context.store, this.props)
        }

        state = this.usedState();

        onStoreChange = () =>{
          if(this.subscriptionID){
            // this.forceUpdate();
            this.setState(this.usedState());
          }
        }
        componentDidMount(){
          this.subscriptionID = this.context.store.subscribe(this.onStoreChange);
        }
        componentWillUnmount(){
          this.context.store.unSubscribe(this.subscriptionID);
          this.subscriptionID=null;
        }

        render(){
          return <Component 
            {...this.props} 
            {...this.usedState()}
            store={this.context.store}/>;
        }
  };
};

export default storeProvider;