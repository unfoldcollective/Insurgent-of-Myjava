import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCharacter } from '../../actions';

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
  return bindActionCreators({ selectCharacter }, dispatch);
}

//Component
class Insurgent extends React.Component {
  render() {
    const InsurgentSidebar = (
      <Sidebar>
        <p>
          {
            this.props.data.content.characters[
              this.props.canvas.insurgent.character
            ].description[this.props.data.lang]
          }
        </p>
      </Sidebar>
    );
    return (
      <WithSidebar sidebar={InsurgentSidebar}>
        <Step>
          <Carousel
            data={this.props.data}
            items={this.props.data.content.characters}
            current={this.props.canvas.insurgent.character}
            select={this.props.selectCharacter}
          />
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
