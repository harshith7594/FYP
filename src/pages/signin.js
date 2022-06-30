import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Signin</h1>
      <Link to="/services"></Link>
    </div>
  );
};

export default Signin;