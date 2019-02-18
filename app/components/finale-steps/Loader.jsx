import React, { Component } from 'react';
import { Full } from '../layouts';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.props.next(), 2000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    return (
      <Full>
        <article className="loader">
          <figure className="loader-figure">
            <img src="/static/knife-spinner.gif" className="loader-external" />
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
            }

            img.loader-external {
              width: 100%;
            }
          `}
        </style>
      </Full>
    );
  }
}

export { Loader };
