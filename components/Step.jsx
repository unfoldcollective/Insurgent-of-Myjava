import React, { Component } from 'react';

//Component
class Step extends Component {
  render() {
    return (
      <div className="step">
        {/* children */}
        {this.props.children}

        <style jsx>{`
          div.step {
            height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

export default Step;
