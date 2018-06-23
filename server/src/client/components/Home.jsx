import React from 'react';
import { logger } from '../utils/logging';

const Home = () => (
  <div>
    <h1>
      This is home
    </h1>
    <p>
      This is the home page being rendered for the server....
    </p>
    <div>
      <button type="button" onClick={() => logger.log('clicking...')}>
        press me!
      </button>
    </div>
  </div>
);

export default Home;
