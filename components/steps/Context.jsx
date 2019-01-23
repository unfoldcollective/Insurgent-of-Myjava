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
class Context extends React.Component {
  render() {
    return (
      <>
        <h1>Context</h1>
      </>
    );
  }
}

const ConnectedContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Context);

export { ConnectedContext as Context };
