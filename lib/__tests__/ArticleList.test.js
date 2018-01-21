import React from 'react';
import ArticleList from '../components/ArticleList';
import data from '../testData';
// import ReactTestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

const testProps = {
  articles: data.articles,
  actions: {
    lookupAuthorById: jest.fn(() => data.authors[0] )
  }
};

describe('Article List Component', () => {
  it('should render correctly', () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(
      <ArticleList {...testProps} />
    );
    // console.log('wrapper:',wrapper);
    // console.log('wrapper.e', wrapper.exists);
    // console.log('getEle', wrapper.getElement());
    // console.log('getEle', wrapper.getElement().props.children.length);
    expect(wrapper.getElement().props.children.length).toBe(5);
    
    expect(wrapper).toMatchSnapshot();
    // expect(domTree.children.length).toBeGreaterThan(0);
  });
});