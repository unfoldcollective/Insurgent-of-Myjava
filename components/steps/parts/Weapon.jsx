import React from 'react';

const Weapon = ({ weapon }) => {
  return (
    <React.Fragment>
      <img className="weapon-image" src={`/static/${weapon.image}`} />
      <style jsx>{`
        img.weapon-image {
          display: block;
          width: 100%;
          z-index: 1;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Weapon;
