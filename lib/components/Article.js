import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateDisplay = (dataString) =>{
  return new Date(dataString).toDateString();
};

const Article = (props, {store}) => {
  const { article } = props;
  const author = store.lookupAuthor(article.authorId);
  
  return (
    <div style={styles.article}>
      <div style={styles.title}>{props.article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a style={styles.website} href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

Article.contextTypes = {
  store: PropTypes.object,
};

export default Article;