import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
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
    let {articles, searchTerm} = this.state;
    if(searchTerm){
      articles = pickBy(articles, (value)=>{
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
export default App;