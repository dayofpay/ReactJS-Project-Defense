import React from 'react';

const LoadingAnimation = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif"
        alt="Loading"
        style={{ width: '50px', height: '50px' }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
