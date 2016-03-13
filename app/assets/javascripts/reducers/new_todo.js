let newTodo = (state = {content: ''}, action) => {
  switch (action.type) {
    case 'TODO_ADDED':
      return {content: ''};
    case 'TODO_FAILED':
      return {
        content: state.content,
        error: action.errors.content[0]
      };
    case 'CHANGE_CONTENT':
      return {content: action.content};
    default:
      return state;
  }
};

export default newTodo;
