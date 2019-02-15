import React, { Component } from 'react';

class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caps: false,
      rows: [
        '1 2 3 4 5 6 7 8 9 0'.split(' '),
        'q w e r t z u i o p'.split(' '),
        'a s d f g h j k l -'.split(' '),
        '@ z x c v b n m , .'.split(' ')
      ]
    };
  }
  render() {
    return (
      <article className="keyboard">
        {this.state.rows.map((r, i) => {
          return (
            <ul className="keyboard-row" key={`keyboard_row_${i}`}>
              {r.map((k, i) => {
                return (
                  <li className="keyboard-keyholder" key={`keyboard_key_${i}`}>
                    <button className="keyboard-key">{k}</button>
                  </li>
                );
              })}
            </ul>
          );
        })}

        <ul className="keyboard-row">
          <li className="keyboard-keyholder">
            <button className="keyboard-key">SPACE</button>
          </li>
        </ul>

        <style jsx>
          {`
            article.keyboard {
              display: flex;
              flex-direction: column;
              width: 50rem;
            }

            ul.keyboard-row {
              display: flex;
              list-style: none;
            }

            li.keyboard-keyholder {
              margin: 0.1rem;
              flex-grow: 1;
              display: flex;
            }

            button.keyboard-key {
              flex-grow: 1;
              padding: 1rem 0;
              background: black;
              color: white;
              border: 2px solid white;
              font-family: monospace;
              font-size: 1.5rem;
              font-weight: bold;
              border-radius: 10%;
            }

            button.keyboard-key:active {
              background: white;
              color: black;
            }
          `}
        </style>
      </article>
    );
  }
}

export default Keyboard;
