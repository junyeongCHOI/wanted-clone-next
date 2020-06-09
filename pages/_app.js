import App from "next/app";
import { wrapper } from "../store";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import PasswordModal from "../components/modals/PasswordModal";
import CompanyLogin from "../components/modals/CompanyLogin";
import CompanyRegister from "../components/modals/CompanyRegister";
import { connect } from "react-redux";

class WrappedApp extends App {
  render() {
    const {
      Component,
      pageProps,
      isLoginModalOn,
      isRegisterModalOn,
      isPasswordModalOn,
      isCompanyLoginModalOn,
      isCompanyRegisterOn,
    } = this.props;
    return (
      <>
        {isLoginModalOn && <LoginModal />}
        {isRegisterModalOn && <RegisterModal />}
        {isPasswordModalOn && <PasswordModal />}
        {isCompanyLoginModalOn && <CompanyLogin />}
        {isCompanyRegisterOn && <CompanyRegister />}
        <Component {...pageProps} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginModalOn: state.isLoginModalOn,
    isRegisterModalOn: state.isRegisterModalOn,
    isPasswordModalOn: state.isPasswordModalOn,
    isCompanyLoginModalOn: state.isCompanyLoginModalOn,
    isCompanyRegisterOn: state.isCompanyRegisterOn,
  };
};

export default wrapper.withRedux(connect(mapStateToProps, null)(WrappedApp));
