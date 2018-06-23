import React from 'react';
import LayoutMain from './LayoutMain';
import { logger } from '../utils/logging';

const About = () => (
  <LayoutMain>
    <h1>
      About...
    </h1>
    <div>
      <button type="button" onClick={() => logger.log('clicking...')}>
        Find out more!
      </button>
    </div>
  </LayoutMain>
);

export default About;
