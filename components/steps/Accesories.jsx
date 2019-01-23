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
class Accesories extends React.Component {
  render() {
    return (
      <>
        <h1>Accesories</h1>
      </>
    );
  }
}

const ConnectedAccesories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accesories);

export { ConnectedAccesories as Accesories };
