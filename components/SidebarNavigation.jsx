import React, { Component } from 'react';
import Cta from './Cta.jsx';

class SidebarNavigation extends Component {
  listSteps() {
    const steps = [];
    for (let index = 0; index <= this.props.totalSteps; index++) {
      steps.push(
        <Cta
          active={index <= this.props.step}
          key={`step_${index}`}
          action={() => this.props.changeStep(index)}
        >
          {index}
        </Cta>
      );
    }
    return steps;
  }

  render() {
    const { advanceStep, activateHelp } = this.props;

    return (
      <>
        <header className="sidebar-steps">
          <nav>{this.listSteps()}</nav>
        </header>
        <ul className="sidebar-nav">
          <li>
            <Cta href="/">Home</Cta>
          </li>
          <li>
            <Cta action={() => advanceStep()}>Next</Cta>
          </li>
          <li>
            <Cta action={() => activateHelp()}>Help</Cta>
          </li>
        </ul>
        <style jsx>{`
          header.sidebar-steps {
            margin-bottom: 2rem;
          }

          ul.sidebar-nav {
            list-style: none;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          button {
            padding: 1rem;
            margin: 0 1rem;
          }
        `}</style>
      </>
    );
  }
}

export default SidebarNavigation;
