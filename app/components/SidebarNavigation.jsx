import React, { Component, Fragment } from 'react';
import Cta from './Cta.jsx';

import { _s } from '../utils';

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
    const {
      advanceStep,
      activateHelp,
      saveInsurgent,
      step,
      totalSteps,
      data
    } = this.props;

    return (
      <Fragment>
        <header className="sidebar-steps">
          <nav>{this.listSteps()}</nav>
        </header>
        <ul className="sidebar-nav">
          <li>
            <Cta href="/">{_s('HOME', data)}</Cta>
          </li>
          <li>
            {step < totalSteps ? (
              <Cta action={() => advanceStep()}>{_s('CONTINUE', data)}</Cta>
            ) : (
              <Cta action={() => saveInsurgent()}>{_s('FINISH', data)}</Cta>
            )}
          </li>
          <li>
            <Cta action={() => activateHelp()}>{_s('HELP', data)}</Cta>
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
        `}</style>
      </Fragment>
    );
  }
}

export default SidebarNavigation;
