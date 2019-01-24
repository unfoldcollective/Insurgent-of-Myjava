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
class Weapon extends React.Component {
  render() {
    const WeaponSidebar = <Sidebar>this is the weapon sidebar!</Sidebar>;

    return (
      <WithSidebar sidebar={WeaponSidebar}>
        <Step>
          <h1>Weapon</h1>
        </Step>
      </WithSidebar>
    );
  }
}

const ConnectedWeapon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapon);

export { ConnectedWeapon as Weapon };
