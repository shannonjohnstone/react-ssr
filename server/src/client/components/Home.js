import React from 'react';
import LayoutMain from './LayoutMain';
import { logger } from '../utils/logging';

const Home = () => (
  <LayoutMain>
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
  </LayoutMain>
);

export default Home;
