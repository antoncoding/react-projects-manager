import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  deleteTodo(id){
  // pass upward one more time
  this.props.onDelete(id);
}


  render() {
    // console.log(this.props);

    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo=>{
        // console.log(todo);
        return <TodoItem key={todo.title} todo={todo} onDelete={this.deleteTodo.bind(this)}/>
      })
    }

    return (
      <div className="todos">
        {todoItems}
      </div>
    );
  }
}

// Validate Property Type:  (this.props.___)
Todos.propTypes = {
  todos:PropTypes.array,
  onDelete:PropTypes.func
}﻿

export default Todos;
