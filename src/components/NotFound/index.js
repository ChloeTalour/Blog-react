import React from 'react';
import { Route } from 'react-router-dom';
import './styles.scss';

const NotFound = () => (
  <Route>
    <div className="error">
      <p className="error__text">404</p>
    </div>
  </Route>
);

export default NotFound;
