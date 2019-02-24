import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { Validate } from './finale-steps';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

class Shot extends Component {
  render() {
    const character = this.props.data.content.characters[
      this.props.saved.insurgent.character
    ];

    const weapon = this.props.data.content.weapons[
      this.props.saved.insurgent.weapon.model
    ];

    const extras = this.props.saved.insurgent.weapon.extras;

    return (
      <Fragment>
        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          bg={this.props.saved.bg}
          insurgent={this.props.saved.insurgent}
        />
      </Fragment>
    );
  }
}

const ConnectedShot = connect(mapStateToProps)(Shot);

export default ConnectedShot;
