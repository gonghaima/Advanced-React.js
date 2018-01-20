import StateApi from '../state-api';
import data from '../testData';

const api = new StateApi(data);

describe('DataApi', () => {
  it('express articles as an object', () => {
    const articles = api.getState().articles;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('express authors as an object', () => {
    const authors = api.getState().authors;
    const authorsId = data.authors[0].id;
    const authorsFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorsId);
    expect(authors[authorsId].firstName).toBe(authorsFirstName);
  });
});