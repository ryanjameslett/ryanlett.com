// History Component
// ===================================
//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ProjectIcon extends React.Component {
  render() {
    let className = this.props.icon + "-icon";
    return (
      <div className={className}></div>
    );
  }
}

class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project-item">
        <div className="title">{this.props.data.title}</div>
        <div className="subtitle">{this.props.data.subtitle}</div>
        <ProjectIcon icon={this.props.data.type} />
      </div>
    )
  }
}

class Projects extends React.Component {
  generateProjectItems() {
    let list = [];
    for (let item of this.props.projects) {
      list.push(<ProjectItem data={item} />)
    }
    return list;
  }

  render() {
    return (
      <div className="projects">
        {this.generateProjectItems()}
      </div>
    )
  }
}


class ProjectListing extends React.Component {

  getProjectData() {
    let projects = [
      {
        title: "Home Page",
        subtitle: "Foo",
        type: "react",
      },
      {title: "Analytics Server"},
      {title: "Image Proxy"},
    ];

    return projects;
  }

  constructor(props) {
    super(props)
    this.state = {
      projects: this.getProjectData(),
      title: "Project Listing",
    }
  }

  render() {
    return (
      <div className="project-listing">
        <h2 className="info-block">
          {this.state.title}
        </h2>
        <Projects projects={this.state.projects} />
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

