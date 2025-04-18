import Footer from '@/compenents/shared/Footer';

const Auth = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Auth;
