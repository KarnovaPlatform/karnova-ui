import {combineReducers} from 'redux';
import Main from './Module';
import Widgets from '../widgets/Module';
import Login from './karnova/login/Module'


const reducers = combineReducers({
    Login,
    Main,
    Widgets
});

export default reducers;
