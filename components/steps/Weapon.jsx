import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _s } from '../../utils';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

//Component
class Weapon extends React.Component {
  render() {
    return (
      <>
        <h1>Weapon</h1>
      </>
    );
  }
}

const ConnectedWeapon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapon);

export { ConnectedWeapon as Weapon };
