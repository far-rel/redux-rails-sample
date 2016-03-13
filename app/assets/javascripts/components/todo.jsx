import React from 'react';

class Todo extends React.Component {

  render () {
    return (
      <div>
        <span>
          {`Content: ${this.props.content}`}
        </span>
      </div>
    );
  }

}

export default Todo;