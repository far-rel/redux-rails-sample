import uuid from 'node-uuid';
import qwest from 'qwest';

let todosLoaded = (todos) => {
  return {
    type: 'TODOS_LOADED',
    todos
  };
};

let todoAdded = (todo) => {
  return {
    type: 'TODO_ADDED',
    todo
  }
};

let todoFailed = (errors) => {
  return {
    type: 'TODO_FAILED',
    errors
  }
};

export const addTodo = (content) => {
  return (dispatch) => {
    return qwest.post('/todos.json', {todo: {
      id: uuid.v4(),
      content
    }}).then((xhr, response) => {
      dispatch(todoAdded(response));
    }).catch((xhr, status, response) => {
      dispatch(todoFailed(response.errors));
    });
  };
};

export const changeContent = (content) => {
  return {
    type: 'CHANGE_CONTENT',
    content: content
  }
};

export const fetchTodos = () => {
  return (dispatch) => {
    return qwest.get('/todos.json').then((xhr, response) => {
      dispatch(todosLoaded(response));
    });
  };
};
