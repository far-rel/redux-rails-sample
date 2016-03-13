import createReducer from './base';

function todoAdded (state, action) {
  return [...state, action.response];
}

function todosLoaded (state, action) {
  return action.response;
}

let todos = createReducer({
  'CREATE_TODO_SUCCESS': todoAdded,
  'LOAD_TODOS_SUCCESS': todosLoaded
}, []);

export default todos;
