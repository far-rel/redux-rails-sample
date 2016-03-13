import createReducer from './base';

function todoAdded () {
  return {content: ''};
}

function todoFailed (state, action) {
  return {
    content: state.content,
    error: action.errors.content[0]
  };
}

function changeContent (state, action) {
  return {content: action.content};
}

let newTodo = createReducer({
  TODO_ADDED: todoAdded,
  TODO_FAILED: todoFailed,
  CHANGE_CONTENT: changeContent
}, {content: ''});

export default newTodo;
