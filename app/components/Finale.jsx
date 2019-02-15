import React, { Component, Fragment } from 'react';
import Error from 'next/error';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { finishAdvance } from '../actions';

import { Loader, Validate } from './finale-steps';

function mapStateToProps(state) {
  const { data, finish } = state;
  return {
    data,
    finish
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ finishAdvance }, dispatch);
}

/**
 * state a: show animation component <Loading></Loading>
 * state b: show non editable composition <Validate></Validate>
 * state c: show non editable composition + keyboard for nameCANVAS.STEP_ADVANCED
 * state d: show non editable composition + keyboard for name
 */

class Finale extends Component {
  render() {
    const { step } = this.props.finish;

    const character = this.props.data.content.characters[
      this.props.saved.insurgent.character
    ];

    const weapon = this.props.data.content.weapons[
      this.props.saved.insurgent.weapon.model
    ];

    const extras = this.props.saved.insurgent.weapon.extras;

    if (step === 0) return <Loader next={this.props.finishAdvance} />;

    return (
      <Fragment>
        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          insurgent={this.props.saved.insurgent}
        />
      </Fragment>
    );
  }
}

const ConnectedFinale = connect(
  mapStateToProps,
  mapDispatchToProps
)(Finale);

export default ConnectedFinale;
