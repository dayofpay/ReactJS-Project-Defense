import React from 'react';

const LoadingAnimation = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2Fgifs%2Floading&psig=AOvVaw02yUQWotMVCBZMuecM-K0a&ust=1702134563436000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDC5MKPgIMDFQAAAAAdAAAAABAD" // Replace with the URL of your loading animation image
        alt="Loading"
        style={{ width: '50px', height: '50px' }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
