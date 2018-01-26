import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext(){
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  setSearchTerm = (searchTerm) =>{
    this.setState({searchTerm});
  };
  render() {
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
export default App;