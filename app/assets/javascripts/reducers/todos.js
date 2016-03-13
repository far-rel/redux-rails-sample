import createReducer from './base';

function todoAdded (state, action) {
  return [...state, action.todo];
}

function todosLoaded (state, action) {
  return action.todos;
}

let todos = createReducer({
  'TODO_ADDED': todoAdded,
  'TODOS_LOADED': todosLoaded
}, []);

export default todos;
