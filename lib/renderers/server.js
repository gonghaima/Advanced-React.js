import React from 'react';
import ReactDOMServer from 'react-dom/server';


import App from '../components/App';
import axios from 'axios';
import StateApi from '../state-api';
import config from '../config';


const serverRender = async () =>{
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store}/>),
    initialData: resp.data,
  };

};

export default serverRender;