import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithSidebar } from '../layouts';
import Step from '../Step.jsx';

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
    const Sidebar = <div>this is the insurgent sidebar!</div>;
    return (
      <WithSidebar sidebar={Sidebar}>
        <Step>
          <h1>Insurgent</h1>
        </Step>
      </WithSidebar>
    );
  }
}

const ConnectedInsurgent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insurgent);

export { ConnectedInsurgent as Insurgent };
