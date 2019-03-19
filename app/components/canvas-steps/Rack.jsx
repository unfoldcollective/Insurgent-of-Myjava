import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _s } from '../../utils';

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
class Rack extends React.Component {
  render() {
    const WeaponSidebar = (
      <Sidebar>
        <h1 className="sidebar-title">
          {_s('WEAPON_SELECTION_TITLE', this.props.data)}
        </h1>
        <p
          className="sidebar-intro"
          dangerouslySetInnerHTML={_s(
            'WEAPON_SELECTION_INTRO',
            this.props.data,
            true
          )}
        />
        <style jsx>{`
          h1.sidebar-title {
            font-size: 2rem;
            text-align: center;
            margin: 3rem;
            letter-spacing: 0.1rem;
          }

          p.sidebar-intro {
            text-align: center;
            margin: 0 3rem;
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
          }
        `}</style>
      </Sidebar>
    );

    return (
      <WithSidebar sidebar={WeaponSidebar}>
        <Step>
          <Carousel
            data={this.props.data}
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
)(Rack);

export { ConnectedWeapon as Rack };
