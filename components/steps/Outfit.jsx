import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithSidebar } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Character from '../Character.jsx';

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
    const character = this.props.data.content.characters[
      this.props.canvas.insurgent.character
    ];
    const OutfitSidebar = <Sidebar>this is the insurgent sidebar!</Sidebar>;

    return (
      <WithSidebar sidebar={OutfitSidebar}>
        <Step>
          <Character character={character} />
        </Step>
      </WithSidebar>
    );
  }
}

const ConnectedOutfit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Outfit);

export { ConnectedOutfit as Outfit };
