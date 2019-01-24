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
      <article>
        <section className="sidebar-content">{this.props.children}</section>

        <section className="sidebar-navigation">
          <SidebarNavigation
            advanceStep={this.props.advanceStep}
            activateHelp={this.props.activateHelp}
          />
        </section>
      </article>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
