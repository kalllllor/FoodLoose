import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root'),
);
