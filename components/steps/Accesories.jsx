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
class Accesories extends React.Component {
  render() {
    const AccesoriesSidebar = (
      <Sidebar>this is the Accesories sidebar!</Sidebar>
    );

    return (
      <WithSidebar sidebar={AccesoriesSidebar}>
        <Step>
          <h1>Accesories</h1>
        </Step>
      </WithSidebar>
    );
  }
}

const ConnectedAccesories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accesories);

export { ConnectedAccesories as Accesories };
