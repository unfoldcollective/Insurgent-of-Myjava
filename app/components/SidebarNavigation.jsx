import React, { Component, Fragment } from 'react';
import Cta from './Cta.jsx';
import Link from 'next/link';

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
      discardFunFact,
      saveInsurgent,
      exitRequested,
      step,
      totalSteps,
      data
    } = this.props;

    let helpSection = null;

    if (step === 0) helpSection = 'helpModeInsurgent';
    if (step === 1) helpSection = 'helpModeOutfit';
    if (step === 4) helpSection = 'helpModeAccessories';

    return (
      <Fragment>
        <header className="sidebar-steps">
          <nav>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="100"
              viewBox="0 0 105.833 26.458"
            >
              <g
                transform="translate(0 -270.542)"
                stroke="#fff"
                strokeWidth=".54"
              >
                <path
                  d="M8.524 282.966c18.92 0 75.678.133 94.597.133v-.133-.132c-18.92 0-75.678.132-94.597.132z"
                  transform="matrix(1.05696 0 0 1 -6.225 .804)"
                  fill="none"
                />
                <circle
                  cx="3.326"
                  cy="283.771"
                  r="1.663"
                  fill={step > -1 ? 'white' : 'black'}
                />
                <circle
                  r="1.663"
                  cy="283.771"
                  cx="36.311"
                  fill={step > 0 ? 'white' : 'black'}
                />
                <circle
                  cx="69.296"
                  cy="283.771"
                  r="1.663"
                  fill={step > 2 ? 'white' : 'black'}
                />
                <circle
                  r="1.663"
                  cy="283.771"
                  cx="102.281"
                  fill={step > 3 ? 'white' : 'black'}
                />
              </g>
            </svg>
          </nav>
        </header>
        <ul className="sidebar-nav">
          <li className="sidebar-next">
            {step < totalSteps ? (
              <Cta
                action={() => {
                  advanceStep();
                  discardFunFact();
                }}
                className="big"
              >
                {_s('CONTINUE', data)}
              </Cta>
            ) : (
              <Cta action={() => saveInsurgent()} className="big">
                {_s('FINISH', data)}
              </Cta>
            )}
          </li>
          {helpSection ? (
            <li>
              <button
                className="icon help"
                onClick={() => activateHelp(helpSection)}
              >
                {_s('HELP', data)}
              </button>
            </li>
          ) : null}
          <li>
            <button className="icon home" onClick={exitRequested}>
              {_s('HOME', data)}
            </button>
          </li>
        </ul>
        <style jsx>{`
          header.sidebar-steps {
          }

          ul.sidebar-nav {
            list-style: none;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2rem;
          }

          li.sidebar-next {
            flex-basis: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
          }

          button.icon {
            background: transparent;
            width: 2rem;
            height: 2rem;
            color: transparent;
            margin: 0 1rem;
          }

          button.home {
            background-image: url('/static/i-return.svg');
          }

          button.help {
            background-image: url('/static/i-info.svg');
          }
        `}</style>
      </Fragment>
    );
  }
}

export default SidebarNavigation;
