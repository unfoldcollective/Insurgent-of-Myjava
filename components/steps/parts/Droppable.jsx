import React, { Component } from 'react';
import interact from 'interactjs';

class Droppable extends Component {
  constructor(props) {
    super(props);

    this.droppable = React.createRef();
  }

  componentDidMount() {}
  render() {
    return (
      <div className="droppable" ref={this.droppable}>
        droppable
        <style jsx>
          {`
            div.droppable {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(100, 100, 100, 0.4);
              z-index: 2;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Droppable;
