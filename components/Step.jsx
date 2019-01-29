import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep, retreatStep, changeStep } from '../actions';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep, retreatStep, changeStep }, dispatch);
}

//Component
class Step extends React.Component {
  listSteps() {
    const steps = [];
    for (let index = 0; index <= this.props.canvas.totalSteps; index++) {
      steps.push(
        <button
          className={index <= this.props.canvas.step ? 'current' : null}
          key={`step_${index}`}
          onClick={() => this.props.changeStep(index)}
        >
          {index}

          <style jsx>{`
            button {
              margin: 0 0.5rem;
              padding: 1rem;
            }

            button.current {
              background: black;
              color: white;
            }
          `}</style>
        </button>
      );
    }
    return steps;
  }
  render() {
    return (
      <div className="step">
        <header className="step-header">
          <nav>{this.listSteps()}</nav>
        </header>

        {/* children */}
        {this.props.children}

        <style jsx>{`
          div.step {
            height: 100vh;
          }

          header.step-header {
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            z-index: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step);
