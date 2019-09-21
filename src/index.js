import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import App from './App';

axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
