import uuid from 'node-uuid';
import qwest from 'qwest';

export const addTodo = (content) => {
  return {
    async: true,
    type: 'CREATE_TODO',
    repository: {
      perform: (params) => {
        return qwest.post('/todos.json', params);
      }
    },
    payload: {
      todo: {
        id: uuid.v4(),
        content
      }
    }
  };
};

export const changeContent = (content) => {
  return {
    type: 'CHANGE_CONTENT',
    content: content
  }
};

export const fetchTodos = () => {
  return {
    async: true,
    type: 'LOAD_TODOS',
    repository: {
      perform: () => {
        return qwest.get('/todos.json');
      }
    }
  };
};
