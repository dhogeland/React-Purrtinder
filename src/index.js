import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Store/store';

import App from './Containers/App/App';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
