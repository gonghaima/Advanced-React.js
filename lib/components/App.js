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
  render() {
    return (
      <div>
        <SearchBar/>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
export default App;