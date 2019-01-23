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
class Outfit extends React.Component {
  render() {
    return (
      <>
        <h1>Outfit</h1>
      </>
    );
  }
}

const ConnectedOutfit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Outfit);

export { ConnectedOutfit as Outfit };
