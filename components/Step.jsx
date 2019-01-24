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
        <button key={index} onClick={() => this.props.changeStep(index)}>
          {index}
        </button>
      );
    }
    return steps;
  }
  render() {
    const { step, totalSteps } = this.props.canvas;
    return (
      <div className="step">
        <header className="step-header">
          <h1>
            Step: {step} / {totalSteps}
          </h1>
          <nav>{this.listSteps()}</nav>
        </header>

        {/* children */}
        {this.props.children}

        <style jsx>{`
          .step-header {
            background: lightgreen;
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
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
