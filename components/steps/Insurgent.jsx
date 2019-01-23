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
class Insurgent extends React.Component {
  render() {
    return (
      <>
        <h1>Insurgent</h1>
      </>
    );
  }
}

const ConnectedInsurgent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insurgent);

export { ConnectedInsurgent as Insurgent };
