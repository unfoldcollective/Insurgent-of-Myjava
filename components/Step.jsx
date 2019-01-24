import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep, retreatStep, changeStep } from '../actions';

import { _s } from '../utils';

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
        <h1>
          Step: {step} / {totalSteps}
        </h1>
        <nav>{this.listSteps()}</nav>

        {/* children */}
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step);
