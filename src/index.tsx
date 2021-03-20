import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NewsApp from './Containers/App/App';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NewsApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
