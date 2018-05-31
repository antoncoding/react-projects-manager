import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

   deleteTodo(id){
    this.props.onDelete(id);
  }



  render() {
    console.log(this.props);
    return (
      <li className="Todo">
        <strong> {this.props.todo.title} </strong> <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}> X </a>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo:PropTypes.object,
  onDelete:PropTypes.func
}﻿

export default TodoItem;
