import React, { Component } from 'react';

class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caps: false,
      content: [],
      hasError: false,
      rows: [
        '1 2 3 4 5 6 7 8 9 0'.split(' '),
        'q w e r t z u i o p'.split(' '),
        'a s d f g h j k l -'.split(' '),
        '@ y x c v b n m _ .'.split(' ')
      ]
    };
  }

  click(k) {
    const content = [...this.state.content, k];

    this.setState({ content, caps: false });
  }

  del() {
    const content = [...this.state.content];
    content.splice(-1, 1);

    this.setState({ content });
  }

  toggleCaps() {
    this.setState({
      caps: !this.state.caps
    });
  }

  send() {
    if (this.state.content.length === 0 && this.props.required) {
      this.setState({ hasError: true });
      return;
    }

    this.props.action(this.state.content.join(''));
  }

  render() {
    return (
      <article className="keyboard">
        <div className="keyboard-input">
          <div
            className={`keyboard-feed ${
              this.state.hasError ? 'inputError' : ''
            }`}
          >
            {this.state.content.join('')}
          </div>
          <button className="keyboard-action" onClick={() => this.send()}>
            Next
          </button>
        </div>
        <div className="keyboard-rows">
          {this.state.rows.map((r, i) => {
            return (
              <ul className="keyboard-row" key={`keyboard_row_${i}`}>
                {r.map((k, i) => {
                  const char = this.state.caps ? k.toUpperCase() : k;
                  return (
                    <li
                      className="keyboard-keyholder"
                      key={`keyboard_key_${i}`}
                    >
                      <button
                        className="keyboard-key"
                        onClick={() => this.click(char)}
                      >
                        {char}
                      </button>
                    </li>
                  );
                })}
              </ul>
            );
          })}

          <ul className="keyboard-row extra">
            <li className="keyboard-keyholder-secondary">
              <button
                className="keyboard-key secondary"
                style={
                  this.state.caps
                    ? { background: 'white', color: 'black' }
                    : null
                }
                onClick={() => this.toggleCaps()}
              >
                CAPS
              </button>
            </li>
            <li className="keyboard-keyholder">
              <button className="keyboard-key" onClick={() => this.click(' ')}>
                SPACE
              </button>
            </li>
            <li className="keyboard-keyholder-secondary">
              <button
                className="keyboard-key secondary"
                onClick={() => this.del()}
              >
                DEL
              </button>
            </li>
          </ul>
        </div>

        <style jsx>
          {`
            article.keyboard {
              display: flex;
              flex-direction: column;
              width: 50rem;
            }

            div.keyboard-input {
              margin-bottom: 1.5rem;
              display: flex;
            }

            div.keyboard-feed {
              background: white;
              flex-grow: 1;
              margin-right: 1rem;
              padding: 0.5rem 1rem;
              color: black;
              font-size: 1.4rem;
              font-family: SourceSans;
            }

            button.keyboard-action {
              padding: 0.5rem 1rem;
              background: black;
              color: white;
              border: 2px solid white;
              font-family: monospace;
              font-size: 1.5rem;
              font-weight: bold;
              border-radius: 0.5rem;
            }

            ul.keyboard-row {
              display: flex;
              list-style: none;
            }

            ul.extra {
              margin-top: 1rem;
            }

            li.keyboard-keyholder {
              margin: 0.1rem;
              flex-grow: 1;
              display: flex;
            }

            li.keyboard-keyholder-secondary {
              margin: 0.1rem;
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
              border-radius: 0.5rem;
            }

            button.secondary {
              padding: 0 2rem;
            }

            button.keyboard-key:active {
              background: white;
              color: black;
            }

            div.inputError {
              animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
              transform: translate3d(0, 0, 0);
              backface-visibility: hidden;
              perspective: 1000px;
            }

            @keyframes shake {
              10%,
              90% {
                transform: translate3d(-1px, 0, 0);
              }

              20%,
              80% {
                transform: translate3d(2px, 0, 0);
              }

              30%,
              50%,
              70% {
                transform: translate3d(-4px, 0, 0);
              }

              40%,
              60% {
                transform: translate3d(4px, 0, 0);
              }
            }
          `}
        </style>
      </article>
    );
  }
}

export default Keyboard;
