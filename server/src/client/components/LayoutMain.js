import React from 'react';
import Navigation from './Navigation';

const LayoutMain = ({ children }) => (
  <div>
    <Navigation />
    <section>
      {children}
    </section>
  </div>
);

export default LayoutMain;
