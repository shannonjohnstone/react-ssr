import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">
      Home
    </Link>
    <Link to="/users">
      Users
    </Link>
  </nav>
);

export default Navigation;
