// History Component
// ===================================
//
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectListing from './ProjectListing';
import './index.css';

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
