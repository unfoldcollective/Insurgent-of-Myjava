import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithSidebar, ContentCentered } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Character from './parts/Character.jsx';
import Weapon from './parts/Weapon.jsx';
import Droppable from './parts/Droppable.jsx';

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
    const character = this.props.data.content.characters[
      this.props.canvas.insurgent.character
    ];
    const weapon = this.props.data.content.weapons[
      this.props.canvas.insurgent.weapon.model
    ];

    const AccesoriesSidebar = (
      <Sidebar>this is the Accesories sidebar!</Sidebar>
    );

    return (
      <WithSidebar sidebar={AccesoriesSidebar}>
        <Step>
          <Droppable />
          <ContentCentered>
            <Weapon weapon={weapon} />
            <Character character={character} withOffset={true} />
          </ContentCentered>
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
