import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  advanceStep,
  activateHelp,
  changeStep,
  saveInsurgent,
  discardFunFact,
  exitRequested
} from '../actions';

import SidebarNavigation from './SidebarNavigation.jsx';

function mapStateToProps(state) {
  const { canvas, data } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      advanceStep,
      activateHelp,
      changeStep,
      saveInsurgent,
      discardFunFact,
      exitRequested
    },
    dispatch
  );
}

//Component
class Sidebar extends React.Component {
  render() {
    return (
      <article className="sidebar-content">
        <section className="sidebar-main">{this.props.children}</section>

        <section className="sidebar-navigation">
          <SidebarNavigation
            data={this.props.data}
            totalSteps={this.props.canvas.totalSteps}
            step={this.props.canvas.step}
            changeStep={this.props.changeStep}
            advanceStep={this.props.advanceStep}
            activateHelp={this.props.activateHelp}
            saveInsurgent={this.props.saveInsurgent}
            discardFunFact={this.props.discardFunFact}
            exitRequested={this.props.exitRequested}
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
            letter-spacing: 0.1rem;
          }

          section.sidebar-navigation {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </article>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
