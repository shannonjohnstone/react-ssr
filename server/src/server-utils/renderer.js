import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import Routes from '../client/routes';

export const renderer = (req, store) => {
  /* content
   * create initial store wrapped application for server
   * location uses req.path to determine which path the application is on
   * to server the correct component from the serverside
   */
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  /* return serverside rendered application
   * using the content variable from above we return intial html
   * in here we import the bundle and attached the intital store for the client
   * serverStore is a serialized version of the server state
   */

  const serverStore = JSON.stringify(serialize(store.getState())).replace(/</g, '\\u003c');
  return (`
    <html>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serverStore}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
};
