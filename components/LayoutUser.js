import Nav from "./Nav/Nav";
import Footer from "./Footer";

const LayoutUser = ({ children, footer = true }) => {
  return (
    <>
      <Nav />
      {children}
      {footer && <Footer />}
    </>
  );
};

export default LayoutUser;
