import Reducer from './base';

class NewTodoReducer extends Reducer {

  constructor () {
    super();
    this.initialState = {content: ''};
  }

  onCreateTodoSuccess (state, action) {
    return {content: ''};
  }

  onCreateTodoFailed (state, action) {
    return {
      content: state.content,
      error: action.response.errors.content[0]
    };
  }

  onChangeContent (state, action) {
    return {content: action.content};
  }
}

export default (new NewTodoReducer()).reducerFunction();
