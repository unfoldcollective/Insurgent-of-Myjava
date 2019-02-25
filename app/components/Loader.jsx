import React, { Component } from 'react';
import { Full } from './layouts';

class Loader extends Component {
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

export default Loader;
