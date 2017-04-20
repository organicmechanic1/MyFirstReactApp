import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App>
  	<h5>This has been passed as a child</h5>
  	<h6>This has been passed as a child too</h6>
  </App>,
  document.getElementById('root')
);
