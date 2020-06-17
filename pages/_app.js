import App from "next/app";
import { wrapper } from "../store";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import PasswordModal from "../components/modals/PasswordModal";
import CompanyLogin from "../components/modals/CompanyLogin";
import CompanyRegister from "../components/modals/CompanyRegister";
import BuyPlan from "../components/modals/BuyPlan";
import { connect } from "react-redux";
import "rc-slider/assets/index.css";
import "react-calendar/dist/Calendar.css";

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
      isBuyPlanOn,
    } = this.props;
    return (
      <>
        {isLoginModalOn && <LoginModal />}
        {isRegisterModalOn && <RegisterModal />}
        {isPasswordModalOn && <PasswordModal />}
        {isCompanyLoginModalOn && <CompanyLogin />}
        {isCompanyRegisterOn && <CompanyRegister />}
        {isBuyPlanOn && <BuyPlan />}
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
    isBuyPlanOn: state.isBuyPlanOn,
  };
};

export default wrapper.withRedux(connect(mapStateToProps, null)(WrappedApp));
