import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
import Projects from './Components/Projects';
import Todos from './Components/Todos'
import AddProject from './Components/AddProject';

class App extends Component {
  // define ini state - hardcode
  constructor(){
    super();
    this.state = {
      projects : [],
      todos:[]
    }
  }

  getToDos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log('Callback: fetch todo');
          // console.log(this.state);
        })
      }.bind(this),
      error:function(xhr, status, err){
        console.log(err)
      }
    })
  }

  getProjects(){
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: 'Personal Website',
        category: 'Coding'
      },
      {
        id: uuid.v4(),
        title: 'NEO Smart Contract',
        category: 'side project'
      },
      {
        id: uuid.v4(),
        title: 'Reactjs NEO interface',
        category: 'side project'
      }
    ]});
  }

  // Life Cycle Method
  // fired everytime rerendered
  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  handleDeleteTodo(id){
    let todos = this.state.todos;
    let idx = todos.findIndex(x => x.id === id);
    todos.splice(idx, 1);
    this.setState({todos:todos});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let idx = projects.findIndex(x => x.id === id);
    projects.splice(idx, 1);
    this.setState({projects:projects});
  }


  handleAddProject(new_project){
    let projects = this.state.projects;
    projects.push(new_project);
    this.setState({projects:projects});
  }


  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <h3> Projects </h3>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

        <br />
        <h3> Todo List</h3>
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
