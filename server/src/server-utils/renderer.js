import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/routes';

export const renderer = (req) => {
  const content = renderToString(
    // location uses req to look at browser url and determin which route to render
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>,
  );

  return (`
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
};
