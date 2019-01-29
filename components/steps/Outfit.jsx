import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeOutfitFilter, dressCharacter } from '../../actions';

import { WithSidebar, ContentCentered } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Character from './parts/Character.jsx';

function mapStateToProps(state) {
  const { data, canvas, outfit } = state;
  return {
    data,
    canvas,
    outfit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeOutfitFilter, dressCharacter }, dispatch);
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
        <nav className="outfit-navigation">
          {Object.keys(clothes).map((c, index) => (
            <button
              key={`outfit_switch_${index}`}
              onClick={() => this.props.changeOutfitFilter(c)}
              className={`outfit-switch ${
                this.props.outfit.filter === c ? 'current' : ''
              }`}
            >
              {c}
            </button>
          ))}
        </nav>

        {Object.keys(clothes).map((slot, index) => {
          return (
            <section
              key={`outfit_category_${index}`}
              hidden={this.props.outfit.filter !== slot}
              className="outfit-category"
            >
              <ul className="outfit-list">
                {clothes[slot].map((item, index) => {
                  return (
                    <li key={`outfit_item_${index}`} className="outfit-item">
                      <img
                        src={`/static/${item}.png`}
                        className="outfit-image"
                        onClick={() => this.props.dressCharacter(slot, item)}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <style jsx>{`
          h1 {
            text-align: center;
            margin: 1rem;
            font-size: 2rem;
          }

          button.outfit-switch {
            padding: 1rem;
            margin: 0 1rem;
          }

          button.outfit-switch.current {
            background: black;
            color: white;
          }

          nav.outfit-navigation {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
          }

          ul.outfit-list {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
          }

          li.outfit-item {
            flex-basis: 33.333%;
            padding: 0.5rem;
          }

          img.outfit-image {
            width: 100%;
          }
        `}</style>
      </Sidebar>
    );

    return (
      <WithSidebar sidebar={OutfitSidebar}>
        <Step>
          <ContentCentered>
            <Character
              character={character}
              index={this.props.canvas.insurgent.character}
              editable={true}
              clothes={this.props.canvas.insurgent.clothes}
            />
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
