import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.moment = require('moment');
window._ = require('lodash');
import 'core-js/es6/array'
import 'core-js/es6/promise'
import 'core-js/es6/object'

require('./app/services/');
require("@fortawesome/fontawesome-free")

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
