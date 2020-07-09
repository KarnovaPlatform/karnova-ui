import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import thunkMiddleware from "redux-thunk";
import {routerReducer} from 'react-router-redux'
import { composeWithDevTools } from "redux-devtools-extension";

import {config} from '../config/config'

import Api from "../services/api";

const api = new Api();

const reducers = require("./reducers").reducers;


const store =  (
  (process.env.NODE_ENV === "development") ?
    createStore(reducers, composeWithDevTools(applyMiddleware(
      thunkMiddleware.withExtraArgument(api),
      thunk,
      )))
    :
    createStore(reducers, applyMiddleware(
      thunkMiddleware.withExtraArgument(api),
      thunk,
      ))
);

export default store;
