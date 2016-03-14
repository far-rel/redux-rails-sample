import Reducer from './base';

class TodosReducer extends Reducer {

  constructor () {
    super();
    this.initialState = [];
  }

  onCreateTodoSuccess (state, action) {
    return [...state, action.response];
  }

  onLoadTodosSuccess (state, action) {
    return action.response;
  }

}

export default (new TodosReducer()).reducerFunction();
