import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { advanceStep, activateHelp } from '../actions';

import SidebarNavigation from './SidebarNavigation.jsx';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep, activateHelp }, dispatch);
}

//Component
class Sidebar extends React.Component {
  render() {
    return (
      <article className="sidebar-content">
        <section className="sidebar-main">{this.props.children}</section>

        <section className="sidebar-navigation">
          <SidebarNavigation
            advanceStep={this.props.advanceStep}
            activateHelp={this.props.activateHelp}
          />
        </section>

        <style jsx>{`
          article.sidebar-content {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }

          section.sidebar-main {
            flex-grow: 1;
            padding: 1rem;
          }

          section.sidebar-navigation {
            padding: 1rem;
            display: flex;
          }
        `}</style>
      </article>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
