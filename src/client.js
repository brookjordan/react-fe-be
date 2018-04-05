import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import reducer from '../reducers/app.js';
import Home from '../components/Home.js';
import { Provider } from 'react-redux';
import routes from '../routes.js';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState);

hydrate(
  (
    <Provider store={store}>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app')
);
