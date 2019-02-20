import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _s } from '../../utils';

import {
  changeOutfitFilter,
  dressCharacter,
  setDragOutfit,
  dropOutfit
} from '../../actions';

import { WithSidebar, ContentCentered } from '../layouts';
import Step from '../Step.jsx';
import Cta from '../Cta.jsx';
import Sidebar from '../Sidebar.jsx';
import Dressable from './parts/Dressable.jsx';
import Draggable from './parts/Draggable.jsx';

function mapStateToProps(state) {
  const { data, canvas, outfit } = state;
  return {
    data,
    canvas,
    outfit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeOutfitFilter, dressCharacter, setDragOutfit, dropOutfit },
    dispatch
  );
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
        <h1>{_s('OUTFITS_TITLE', this.props.data)}</h1>
        <nav className="outfit-navigation">
          {Object.keys(clothes).map((c, index) => (
            <Cta
              key={`outfit_switch_${index}`}
              action={() => this.props.changeOutfitFilter(c)}
              active={this.props.outfit.filter === c ? 'current' : ''}
            >
              {c}
            </Cta>
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
                      <Draggable
                        item={item}
                        dragAction={this.props.setDragOutfit}
                        dropAction={this.props.dropOutfit}
                      >
                        <img
                          src={`/static/${item}.png`}
                          className="outfit-image"
                        />
                      </Draggable>
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
            <Dressable
              character={character}
              index={this.props.canvas.insurgent.character}
              clothes={this.props.canvas.insurgent.clothes}
              status={this.props.outfit}
              dropAction={this.props.dressCharacter}
              editable={true}
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
