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
        <h1 className="sidebar-title">
          {
            this.props.data.content.characters[
              this.props.canvas.insurgent.character
            ].name[this.props.data.lang]
          }
        </h1>
        <p className="sidebar-intro">
          {
            this.props.data.content.characters[
              this.props.canvas.insurgent.character
            ].description[this.props.data.lang]
          }
        </p>

        <style jsx>{`
          h1.sidebar-title {
            font-size: 2rem;
            text-align: center;
            margin: 3rem;
          }

          p.sidebar-intro {
            text-align: center;
            margin: 0 3rem;
          }
        `}</style>
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
