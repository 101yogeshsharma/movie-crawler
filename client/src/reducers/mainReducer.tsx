import { combineReducers } from 'redux';

import login from './loginReducer';
import search from './searchReducer';

export const mainReducer = combineReducers({
    login,
    search
})

export default mainReducer;