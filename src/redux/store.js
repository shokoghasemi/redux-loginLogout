import { createStore } from 'redux';
import combineReducers from './reducer/index';
//import reducer from './reducer/index';

export const store = createStore(combineReducers);