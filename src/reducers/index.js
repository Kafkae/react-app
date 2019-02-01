import { combineReducers } from 'redux';
import { menuReducer } from './menu';
import { userReducer } from './user';


export const rootReducer = combineReducers({
    menu: menuReducer,
    user: userReducer
})