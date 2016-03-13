let todos = (state = [], action) => {
  switch (action.type) {
    case 'TODO_ADDED':
      return [...state, action.todo];
    case 'TODOS_LOADED':
      return action.todos;
    default:
      return state;
  }
};

export default todos;
