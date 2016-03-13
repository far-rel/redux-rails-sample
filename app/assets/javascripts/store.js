import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


let store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
