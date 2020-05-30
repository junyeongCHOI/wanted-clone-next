import App from "next/app";
import { wrapper } from "../store";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import { connect } from "react-redux";

class WrappedApp extends App {
  render() {
    const {
      Component,
      pageProps,
      isLoginModalOn,
      isRegisterModalOn,
    } = this.props;
    return (
      <>
        {isLoginModalOn && <LoginModal />}
        {isRegisterModalOn && <RegisterModal />}
        <Component {...pageProps} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginModalOn: state.isLoginModalOn,
    isRegisterModalOn: state.isRegisterModalOn,
  };
};

export default wrapper.withRedux(connect(mapStateToProps, null)(WrappedApp));
