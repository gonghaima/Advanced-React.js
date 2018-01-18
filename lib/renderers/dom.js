import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from "../state-api";
import App from 'components/App';

const store = new StateApi(window.initialData.data);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);