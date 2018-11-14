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
        <ProjectIcon icon={this.props.data.type} />
        <div className="title">{this.props.data.title}</div>
        <div className="subtitle">{this.props.data.subtitle}</div>
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
      {
        title: "Analytics Server",
        subtitle: "Foo",
        type: "php",
      },
      {
        title: "Image Proxy",
        subtitle: "Foo",
        type: "golang",
      },
    ];

    return projects;
  }

  constructor(props) {
    super(props)
    this.state = {
      projects: this.getProjectData(),
    }
  }

  render() {
    return (
      <section className="project-listing">
        <Projects projects={this.state.projects} />
      </section>
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <aside>
        <div className="nav">Profile</div>
        <div className="nav">Projects</div>
        <div className="nav">Skills</div>
      </aside>
    );
  }
}

function Page(props) {
  return (
    <div className="wrapper">
      <header className="page-header">RyanLett.com</header>
      <SideBar />
      <ProjectListing />
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

