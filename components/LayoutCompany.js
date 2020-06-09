import NavCompany from "./Nav/NavCompany";
import Footer from "./Footer";
import NavLoggedinCompany from "../components/Nav/NavLoggedinCompany";

const LayoutCompany = ({ children, footer = true, loggedin }) => {
  return (
    <>
      <NavCompany />
      {loggedin && <NavLoggedinCompany />}
      {children}
      {footer && <Footer />}
    </>
  );
};

export default LayoutCompany;
