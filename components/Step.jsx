import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep, retreatStep } from '../actions';

import { _s } from '../utils';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep, retreatStep }, dispatch);
}

//Component
class Step extends React.Component {
  render() {
    const { step, totalSteps } = this.props.canvas;
    return (
      <div className="step">
        <h1>
          Step: {step} / {totalSteps}
        </h1>
        <nav>
          <ul>
            <li>
              {step > 0 ? (
                <button onClick={() => this.props.retreatStep()}>
                  Previous
                </button>
              ) : (
                'nope'
              )}
            </li>

            <li>
              {step < totalSteps ? (
                <button onClick={() => this.props.advanceStep()}>Next</button>
              ) : (
                'nope'
              )}
            </li>
          </ul>
        </nav>

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
