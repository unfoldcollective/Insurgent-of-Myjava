import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';

const timeout = {
  enter: 500,
  exit: 500
};

class Transition extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, step } = this.props;

    return (
      <TransitionGroup component={null}>
        <ReactTransition key={step} timeout={timeout}>
          {status => {
            return (
              <div className={`step-transition-${status}`}>{children}</div>
            );
          }}
        </ReactTransition>

        <style jsx>{`
          @keyframes enter {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }

          @keyframes exit {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .step-transition-entering {
            animation: enter ${timeout.enter}ms forwards;
          }

          .step-transition-exiting {
            animation: exit ${timeout.exit}ms forwards;
          }
        `}</style>
      </TransitionGroup>
    );
  }
}

export default Transition;
