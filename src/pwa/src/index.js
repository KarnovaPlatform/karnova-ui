import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// require( './assets/css/bootstrap-old.min.css')
// require( './assets/css/bootstrap.min.css')
// require( './assets/css/your_style.css')
window.moment = require('moment');
window._ = require('lodash');


require('./app/services/');
require("@fortawesome/fontawesome-free")

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
