import React, { Component } from 'react';
import Link from 'next/link';

class GalleryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="gallery">
        <div className="gallery-overlay">
          <Link href="/">
            <a>home</a>
          </Link>
        </div>
        <header className="gallery-header">
          <h1 className="gallery-title">Insurgent ready for battle</h1>
        </header>
        <ul className="gallery-list">
          {this.props.items.data.map(item => {
            return (
              <li key={item._id} className="gallery-item">
                <img
                  src={`/shots/${item._id}_thumb.jpg`}
                  className="gallery-image"
                />
                <h2 className="gallery-item-title">{item.name}</h2>
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          div.gallery-overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            padding: 10rem;
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
        `}</style>
      </section>
    );
  }
}

export default GalleryList;
