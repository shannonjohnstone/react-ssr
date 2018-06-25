// client entry
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import Routes from './routes';

/* preloadedState
 * finding preloadedState from __PRELOADED_STATE__
 * this state item is set from the serverside render
 * this is used to keep the serverside rendered and clietn html in sync
 */

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line
delete window.__PRELOADED_STATE__; // eslint-disable-line

const store = createStore(JSON.parse(preloadedState));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, document.querySelector('#root'),
);
