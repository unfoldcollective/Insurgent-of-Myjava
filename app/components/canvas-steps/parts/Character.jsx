import React from 'react';

const Character = ({ image }) => {
  return (
    <React.Fragment>
      <img className="character-image" src={`/static/${image}`} />

      <style jsx>{`
        img.character-image {
          display: block;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Character;
