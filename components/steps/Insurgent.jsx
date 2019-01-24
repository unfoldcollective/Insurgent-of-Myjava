import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithSidebar } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';

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
    const InsurgentSidebar = <Sidebar>this is the insurgent sidebar!</Sidebar>;
    return (
      <WithSidebar sidebar={InsurgentSidebar}>
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
