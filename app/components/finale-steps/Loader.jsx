import React, { Component } from 'react';
import { Full } from '../layouts';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.props.next(), 10000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    return (
      <Full>
        <article className="loader">
          <figure className="loader-figure">
            <img src="/static/knives.png" className="loader-external" />
          </figure>
        </article>
        <style jsx>
          {`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            article.loader {
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            figure.loader-figure {
              height: 70vh;
              width: 70vh;
              background: url(/static/loader-back.png);
              background-repeat: no-repeat;
              background-position: 55% center;
              background-size: 40%;
            }

            img.loader-external {
              width: 100%;
              animation: spin 15s linear infinite;
            }
          `}
        </style>
      </Full>
    );
  }
}

export { Loader };
