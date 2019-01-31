import React from 'react';

const Character = ({ character, withOffset }) => {
  return (
    <React.Fragment>
      <img
        className="character-image"
        src={`/static/${character.image}`}
        style={withOffset && { transform: `translate(${character.offset}%)` }}
      />

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
