import React from 'react';
import './index.css';

class ProjectItem extends React.Component {
  renderStack() {
    let list = [];
    for (let item of this.props.data.stack) {
      list.push(<div className={item}>{item}</div>)
    }
    return list;
  }

  renderRepoLink() {
    if (this.props.data.repository) {
      return <a href={this.props.data.repository} target="_github">View Code</a>
    }
  }

  render() {
    return (
      <div className="project-item">
        <div className={`project-icon ${this.props.data.type}-icon`}></div>
        <div className="project-head">
          <div className="title">{this.props.data.title}</div>
          <div className="subtitle">{this.props.data.subtitle}</div>
        </div>
        <div className="project-body">{this.props.data.body}</div>
        <div className="project-foot">
          <div className="project-stack">
            {this.renderStack()}
          </div>
          {this.renderRepoLink()}
        </div>
      </div>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      projects: [],
    }
  }

  componentDidMount() {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result.projects,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  generateProjectItems() {
    let list = [];
    for (let item of this.state.projects) {
      list.push(<ProjectItem key={item.key} data={item} />)
    }
    return list;
  }

  render() {
    return (
      <section className="project-listing">
        <div className="projects">
          {this.generateProjectItems()}
        </div>
      </section>
    );
  }
}
