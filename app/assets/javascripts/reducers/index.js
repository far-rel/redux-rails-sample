import { combineReducers } from 'redux';
import todos from './todos';
import newTodo from './new_todo';
import { routerReducer } from 'react-router-redux';

let todoApp = combineReducers({
  todos,
  newTodo,
  routing: routerReducer
});

export default todoApp;
