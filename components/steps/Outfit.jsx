import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithSidebar, ContentCentered } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Character from './parts/Character.jsx';

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

    const { clothes } = this.props.data.content;

    const OutfitSidebar = (
      <Sidebar>
        <h1>Outfits</h1>
        {Object.keys(clothes).map((c, index) => (
          <button key={`clothes_switch_${index}`}>{c}</button>
        ))}

        {Object.keys(clothes).map((category, index) => {
          return (
            <section
              key={`clothes_category_${index}`}
              hidden={this.props.canvas.outfitStep.filter !== category}
            >
              <h2>{category}</h2>
              <ul>
                {clothes[category].map((c, index) => {
                  return (
                    <li key={`clothes_item_${index}`}>
                      <img src={`/static/${c}.png`} />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </Sidebar>
    );

    return (
      <WithSidebar sidebar={OutfitSidebar}>
        <Step>
          <ContentCentered>
            <Character character={character} editable={true} />
          </ContentCentered>
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
