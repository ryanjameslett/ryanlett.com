// History Component
// ===================================
//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Projects extends React.Component {
  render() {
    // TODO: loop over project listing data
    return (
      <div className="projects">
        <div className="project-item">One</div>
        <div className="project-item">Two</div>
        <div className="project-item">Three</div>
        <div className="project-item">Four</div>
      </div>
    )
  }
}


class ProjectListing extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      // projects: getProjectData(),
      title: "Project Listing",
    }
  }

  render() {
    return (
      <div className="project-listing">
        <h2 className="info-block">
          {this.state.title}
        </h2>
        <Projects />
      </div>
    );
  }
}


function Page(props) {
  return (
    <div>
      <h1 className="page-header">RyanLett.com</h1>
      <ProjectListing />
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

