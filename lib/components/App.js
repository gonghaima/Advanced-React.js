import React, { Component } from 'react';

// import { data } from '../testData';
import ArticleList from './ArticleList';


// const api = new DataApi(data);
// const api = new DataApi();

class App extends Component {

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  // async componentDidMount() {
  //   axios.get('/data').then((resp) => {
  //     const api = new DataApi(resp.data.data);
  //     this.setState({
  //       articles: api.getArticles(),
  //       authors: api.getAuthors(),
  //     });
  //   });
  // }

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data.data);
  //   this.setState({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   });
  // }
  


  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;