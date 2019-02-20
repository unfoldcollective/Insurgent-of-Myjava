import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { connect } from 'react-redux';
import { _s } from '../utils';
import TimeoutCta from './TimeoutCta.jsx';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

class GalleryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="gallery">
        <div className="gallery-overlay">
          <TimeoutCta timeout={20000} action={() => Router.push('/')}>
            {_s('LEAVE_GALLERY', this.props.data)}
          </TimeoutCta>
        </div>
        <header className="gallery-header">
          <h1 className="gallery-title">
            {_s('INSURGENT_READY', this.props.data)}
          </h1>
        </header>
        <ul className="gallery-list">
          {this.props.items.data.map(item => {
            return (
              <li key={item._id} className="gallery-item">
                <Link href={`/insurgent/${item._id}`}>
                  <a>
                    <img
                      src={`/shots/${item._id}_thumb.jpg`}
                      className="gallery-image"
                    />
                    <h2 className="gallery-item-title">{item.name}</h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          div.gallery-overlay {
            position: fixed;
            right: 5vw;
            bottom: 5vh;
            padding: 2rem;
          }
          section.gallery {
            background: white;
            min-height: 100vh;
          }

          header.gallery-header {
            display: flex;
            justify-content: center;
            padding: 4rem 0;
          }

          h1.gallery-title {
            font-weight: normal;
            color: black;
            font-size: 3rem;
          }

          ul.gallery-list {
            padding: 0 4rem;
            display: flex;
            flex-wrap: wrap;
          }

          li.gallery-item {
            width: calc(25% - 1rem);
            margin: 0.5rem;
          }

          img.gallery-image {
            width: 100%;
            display: block;
          }

          h2.gallery-item-title {
            background: black;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-family: SourceSans, serif;
          }

          a {
            text-decoration: none;
            color: white;
          }
        `}</style>
      </section>
    );
  }
}

const ConnectedGalleryList = connect(mapStateToProps)(GalleryList);

export default ConnectedGalleryList;
