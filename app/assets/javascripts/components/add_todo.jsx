import React from 'react';
import { connect } from 'react-redux';
import { addTodo, changeContent } from '../actions/todos';

let mapStateToProps = (state) => {
  return {
    content: state.newTodo.content,
    error: state.newTodo.error
  };
};

class AddTodos extends React.Component {
  changeContent (e) {
    this.props.dispatch(changeContent(e.target.value));
  }

  addTodo (e) {
    e.preventDefault();
    this.props.dispatch(addTodo(this.props.content));
  }

  error () {
    if (this.props.error) {
      return (
        <div style={{color: 'red'}}>{this.props.error}</div>
      );
    }
  }

  render () {
    return (
      <div>
        <div>
          <textarea onChange={this.changeContent.bind(this)} value={this.props.content} />
        </div>
        <div>
          {this.error()}
          <button onClick={this.addTodo.bind(this)}>
            Add Todo
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddTodos);
