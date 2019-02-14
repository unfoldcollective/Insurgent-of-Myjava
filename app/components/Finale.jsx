import React, { Component } from 'react';
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
      this.props.insurgent.character
    ];

    const weapon = this.props.data.content.weapons[
      this.props.insurgent.weapon.model
    ];

    const extras = this.props.insurgent.weapon.extras;

    const finaleComponents = {
      0: <Loader next={this.props.finishAdvance} />,
      1: (
        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          insurgent={this.props.insurgent}
        />
      )
    };

    return finaleComponents[step] || <Error statusCode={500} />;
  }
}

const ConnectedFinale = connect(
  mapStateToProps,
  mapDispatchToProps
)(Finale);

export default ConnectedFinale;
