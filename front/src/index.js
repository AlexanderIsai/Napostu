import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider}  from 'react-redux';
import store from './store/store';

import {BrowserRouter} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


