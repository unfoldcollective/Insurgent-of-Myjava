import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectWeapon } from '../../actions';

import { WithSidebar } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Carousel from './parts/Carousel.jsx';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWeapon }, dispatch);
}

//Component
class Weapon extends React.Component {
  render() {
    const WeaponSidebar = (
      <Sidebar>
        {
          this.props.data.content.weapons[
            this.props.canvas.insurgent.weapon.model
          ].description[this.props.data.lang]
        }
      </Sidebar>
    );

    return (
      <WithSidebar sidebar={WeaponSidebar}>
        <Step>
          <Carousel
            items={this.props.data.content.weapons}
            current={this.props.canvas.insurgent.weapon.model}
            select={this.props.selectWeapon}
          />
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
