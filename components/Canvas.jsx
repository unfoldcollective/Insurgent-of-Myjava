import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { advanceStep, retreatStep, resetStep } from '../actions';

function mapStateToProps(state) {
  const { canvas } = state;
  return {
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep, retreatStep, resetStep }, dispatch);
}

class Canvas extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <header>
          <h1>Insurgent canvas</h1>
        </header>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
