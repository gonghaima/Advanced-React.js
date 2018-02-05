import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext(){
    return {
      store: this.props.store
    };
  }
  appState = () =>{
    const { articles, searchTerm} = this.props.store.getState();
    return { articles, searchTerm};
  }
  state = this.appState();
  onStoreChange = () =>{
    this.setState(this.appState());
  }
  componentDidMount(){
    this.subscriptionID = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionID);
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextState.articles !== this.state.articles || nextProps.searchTerm !== this.state.searchTerm);
  }
  // setSearchTerm = (searchTerm) =>{
  //   this.setState({searchTerm});
  // };
  // update when the store state changes...subscribe to store changes
  render() {
    let {articles, searchTerm} = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if(searchRE){
      articles = pickBy(articles, (value)=>{
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
export default App;