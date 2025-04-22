import Footer from '@/compenents/shared/Footer';
import Navbar from '@/compenents/shared/Navbar';
import React from 'react';

const CommonLaout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLaout;
