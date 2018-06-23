import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export const renderer = () => {
  const content = renderToString(<Home />); // eslinit-disable-line;

  return (`
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
};
