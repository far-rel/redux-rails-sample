import React from 'react';
import { fetchTodos } from '../actions/todos';
import { connect } from 'react-redux';
import Todo from './todo.jsx';
import AddTodo from './add_todo.jsx';
import _ from 'underscore';

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

class TodoList extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchTodos());
  }

  todoList () {
    return _.map(this.props.todos, (el) => {
      return (
        <Todo
          key={el.id}
          content={el.content}
        />
      );
    })
  }

  render () {
    return (
      <div>
        <h1>Your TODO list</h1>
        {this.todoList()}
        <AddTodo />
      </div>
    );
  }

}

export default connect(mapStateToProps)(TodoList);
