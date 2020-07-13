import {combineReducers} from 'redux';
import Main from './Module';
import Widgets from '../widgets/Module';
import Login from './karnova/login/Module'
import Home from './karnova/home/Module'


const reducers = combineReducers({
    Login,
    Home,
    Main,
    Widgets
});

export default reducers;
