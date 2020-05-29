import Nav from "./Nav";
import Footer from "./Footer";

const LayoutUser = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default LayoutUser;
