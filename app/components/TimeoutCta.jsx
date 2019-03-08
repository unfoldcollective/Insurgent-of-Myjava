import React, { Component } from 'react';

class TimeoutCta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 0
    };

    this.handleTimeout = this.handleTimeout.bind(this);
    this.forceAction = this.forceAction.bind(this);
  }

  forceAction() {
    if (this.timeout) clearTimeout(this.timeout);
    this.props.action();
  }

  handleTimeout() {
    this.setState({
      countdown: this.state.countdown - 1000
    });

    if (this.state.countdown <= 0) {
      this.props.action();
      clearTimeout(this.timeout);
    }
  }

  componentDidMount() {
    const timeout = this.props.timeout || 5000;

    this.setState({
      countdown: timeout
    });

    this.timeout = setInterval(this.handleTimeout, 1000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="countdown" onClick={() => this.props.action()}>
        <div className="countdown-inner">
          <span className="countdown-text">{this.props.children}</span>
        </div>
        <svg width="160" height="160">
          <circle r="75" cx="80" cy="80" />
        </svg>
        <style jsx>
          {`
            div.countdown {
              width: 160px;
              height: 160px;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            @keyframes countdown {
              from {
                stroke-dashoffset: 0px;
              }
              to {
                stroke-dashoffset: 440px;
              }
            }

            svg {
              position: absolute;
              top: 0;
              left: 0;
              transform: rotateY(-180deg) rotateZ(-90deg);
            }

            svg circle {
              stroke: white;
              stroke-width: 5px;
              stroke-dasharray: 440px;
              stroke-dashoffset: 0px;
              stroke-linecap: round;
              animation: countdown ${this.props.timeout / 1000}s linear infinite
                forwards;
            }

            div.countdown-inner {
              z-index: 100000;
              font-family: SourceSans, serif;
              text-transform: uppercase;
              font-size: 1.4rem;
              text-align: center;
              font-weight: bold;
              width: 130px;
              height: 130px;
              border: 3px dashed white;
              border-radius: 50%;
              display: flex;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default TimeoutCta;
