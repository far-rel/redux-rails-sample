import uuid from 'node-uuid';
import { Todos } from '../repositories';

export const addTodo = (content) => {
  return {
    async: true,
    type: 'CREATE_TODO',
    repository: Todos.create,
    payload: {
      id: uuid.v4(),
      content
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
    repository: Todos.load
  };
};
