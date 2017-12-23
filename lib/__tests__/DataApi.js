import DataApi from '../DataApi';
// import { data } from '../testData';
var data = require('../testData');


const api = new DataApi(data);

describe('DataApi', () => {
  it('express articles as an object', () => {
    //const articles = api.getArticles();
    const aa = {
      'data': {
        'articles': [
          {
            'id': '95c12a8f6c88953ca8f8a39da25546e6',
            'title': 'Introducing React\'s Error Code System',
            'date': 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
            'authorId': '2c6aa2cfe3449467d329fa17d6ea230f',
            'body': 'Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.'
          }]
      }
    }; 
    const articles = api.getArticles(aa);
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('express authors as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId]).toBe(articleTitle);
  });
});