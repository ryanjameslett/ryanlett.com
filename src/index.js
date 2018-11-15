// History Component
// ===================================
//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ProjectIcon extends React.Component {
  render() {
    let className = `project-icon ${this.props.icon}-icon`;
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
        <div className="body">{this.props.data.body}</div>
      </div>
    )
  }
}

class Projects extends React.Component {
  generateProjectItems() {
    let list = [];
    for (let item of this.props.projects) {
      list.push(<ProjectItem key={item.key} data={item} />)
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
    const lorem = `Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, \
                  when an unknown printer took a galley of type and scrambled \
                  it to make a type specimen book. It has survived not only \
                  five centuries, but also the leap into electronic typesetting, \
                  remaining essentially unchanged.`;
    let projects = [
      {
        key: "ryan-lett-home-page",
        title: "Home Page",
        subtitle: "Foo",
        body: lorem,
        type: "react",
        stack: [
          "react",
          "css-grid",
          "semantic-html",
        ]
      },
      {
        key: "analytics-server",
        title: "Analytics Server",
        subtitle: "Foo",
        body: lorem,
        type: "php",
      },
      {
        key: "image-proxy",
        title: "Image Proxy",
        subtitle: "Foo",
        body: lorem,
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

