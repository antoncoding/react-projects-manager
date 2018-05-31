import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {

  deleteProject(id){
  // pass upward one more time
  this.props.onDelete(id);
}


  render() {
    // console.log(this.props);


    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project=>{
        // console.log(project);
        return <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>
      })
    }

    return (
      <div className="projects">
        {projectItems}
      </div>
    );
  }
}

// Validate Property Type:  (this.props.___)
Projects.propTypes = {
  projects:PropTypes.array,
  onDelete:PropTypes.func
}﻿

export default Projects;
