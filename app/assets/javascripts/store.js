import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import asyncCall from './middleware/async_call'


let store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger(), asyncCall));

export default store;
