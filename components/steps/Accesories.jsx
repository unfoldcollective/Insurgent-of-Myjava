import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addAccessory,
  updateAccessory,
  reorderAccessory,
  flipAccessory,
  dragAccessory,
  dropAccessory,
  removeAccessory
} from '../../actions';

import { WithSidebar, ContentCentered } from '../layouts';
import Step from '../Step.jsx';
import Sidebar from '../Sidebar.jsx';
import Weapon from './parts/Weapon.jsx';
import Droppable from './parts/Droppable.jsx';
import Dressable from './parts/Dressable.jsx';
import Draggable from './parts/Draggable.jsx';

function mapStateToProps(state) {
  const { data, canvas, accessorize } = state;
  return {
    data,
    canvas,
    accessorize
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addAccessory,
      updateAccessory,
      reorderAccessory,
      flipAccessory,
      dragAccessory,
      dropAccessory,
      removeAccessory
    },
    dispatch
  );
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

    const extras = this.props.canvas.insurgent.weapon.extras;

    const { accesories } = this.props.data.content;
    const { insurgent } = this.props.canvas;

    const AccesoriesSidebar = (
      <Sidebar>
        <h1>Accessories</h1>
        <ul className="accessories-list">
          {accesories.map((item, index) => {
            return (
              <li
                key={`accessories_item_${index}`}
                className="accessories-item"
              >
                <Draggable src={item.image}>
                  <img
                    src={`/static/${item.image}`}
                    className="accessories-image"
                  />
                </Draggable>
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          ul.accessories-list {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
          }

          li.accessories-item {
            flex-basis: 33.333%;
            padding: 0.5rem;
          }

          img.accessories-image {
            width: 100%;
            height: 6rem;
            object-fit: contain;
          }
        `}</style>
      </Sidebar>
    );

    return (
      <WithSidebar sidebar={AccesoriesSidebar}>
        <Step>
          <Droppable
            extras={extras}
            addAccessory={this.props.addAccessory}
            dragAccessory={this.props.dragAccessory}
            dropAccessory={this.props.dropAccessory}
            updateAccessory={this.props.updateAccessory}
            reorderAccessory={this.props.reorderAccessory}
            flipAccessory={this.props.flipAccessory}
            removeAccessory={this.props.removeAccessory}
            isDragging={this.props.accessorize.isDragging}
          />
          <ContentCentered>
            <Weapon weapon={weapon} />
            <Dressable
              character={character}
              offset={character.offset}
              index={insurgent.character}
              clothes={insurgent.clothes}
            />
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
