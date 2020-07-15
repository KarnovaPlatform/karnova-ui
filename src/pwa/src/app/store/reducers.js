import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer } from "redux-form";

import karnova from '../routes/reducers'


export const reducers = combineReducers({
  karnova,
  form: reducer,
  routing: routerReducer,
});

