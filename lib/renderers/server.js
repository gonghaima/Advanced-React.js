import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from '../DataApi';

import App from '../components/App';
// import config from '../config';

const serverRender = async() => {
  // const resp = await axios.get(`http://${config.host}:${config.port}/data`);  
  const resp = await axios.get('http://localhost:8080/data');  
  // const resp = await axios.get('/data');  
  console.log('====================================');
  console.log(`resp: ${resp}`);
  console.log('====================================');
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return ReactDOMServer.renderToString(<App initialData={initialData} />);
};

export default serverRender;