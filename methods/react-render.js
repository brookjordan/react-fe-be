import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import reducer from '../reducers/app.js';
import Home from '../components/Home.js';
import { matchRoutes, renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom/StaticRouter';
import { Provider } from 'react-redux';
import routes from '../routes.js';

export default reactRender;

function reactRender(req, res, next) {
  const store = createStore(reducer, res.locals.initialStore);
  let context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        { renderRoutes(routes) }
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${ html }</div>

    <script>
      window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState).replace(/</g, '\\u003c') }
    </script>
    <script src="/scripts/client.js"></script>
  </body>
</html>`;
}
