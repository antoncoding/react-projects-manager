import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {

  constructor(){
    super();
    this.state={
      newProject:{}
    }
  }

  // [defaultProprs] is an important word
  static defaultProps = {
    categories : ['Blockchain Article', 'Machine Learning', 'Web Developement', 'Side Project', 'Smart Contract Development', 'Others']
  }


  handleSubmit(event){
    // already bind (this), so we can use it here:
    if(this.refs.title.value===''){
      alert('Set Title')
    }else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // callback function
        // Send this data to {addProject} property of the main component.
        this.props.addProject(this.state.newProject);
      })
    }

    event.preventDefault();
    console.log('Form Submitted')
  }


  render() {
    let categoryOptions = this.props.categories.map(category=>{
      return <option key={category} value={category}> {category} </option>
    });

    return (
      <div>
        <h3> Add Project </h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label> Title </label>
                <input type="text" ref="title"/>
              </div>
              <div>
                <label> Category </label>
                <select ref="category">
                  {categoryOptions}
                </select>
              </div>
              <input type="submit" value="submit"/>
          </form>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  categories:PropTypes.array,
  addProject:PropTypes.func
}﻿



export default AddProject;
