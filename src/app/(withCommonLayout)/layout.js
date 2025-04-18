import Navbar from '@/compenents/shared/Navbar';
import React from 'react';

const CommonLaout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLaout;
