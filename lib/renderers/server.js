import React from 'react';
import ReactDOMServer from 'react-dom/server';


import App from '../components/App';
import axios from 'axios';
import DataApi from '../DataApi';
import config from '../config';


const serverRender = async () =>{
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData}/>),
    initialData,
  };

};

export default serverRender;