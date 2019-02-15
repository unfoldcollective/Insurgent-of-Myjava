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

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <button onClick={this.forceAction}>
        {this.state.countdown} {this.props.children}
      </button>
    );
  }
}

export default TimeoutCta;
