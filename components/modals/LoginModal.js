import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginModalOff, registerModalOn } from "../../actions";

const LoginModal = ({ loginModalOff, registerModalOn }) => {
  const [value, setValue] = useState("");
  const [isValuable, setValuable] = useState(false);

  const changValue = (e) => {
    const val = e.target.value;
    setValue(val);
    if (checkEmail(val)) {
      setValuable(true);
    } else {
      setValuable(false);
    }
  };

  const checkEmail = (currentVal) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(currentVal);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    } else if (isValuable) {
      // Post 응답이 회원이 아닐 때, 회원가입으로 넘어가고 회원이면 로그인.
      registerModalOn();
      loginModalOff();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <LoginModalWrap>
        <Title>
          wanted
          <i className="xi-close" onClick={loginModalOff} />
        </Title>
        <LoginSide onSubmit={submitEmail}>
          <h1>
            친구에게 딱 맞는
            <br />
            회사를 추천해 주세요!
          </h1>
          <h2>
            원티드는 친구에게 좋은 회사를 추천하고, <br />
            채용 성공시 보상 받을 수 있는 서비스입니다.
          </h2>
          <LoginForm>
            <label>이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력해 주세요."
              value={value}
              onChange={changValue}
              style={{
                border:
                  value === ""
                    ? "1px solid #e1e2e3"
                    : isValuable
                    ? "1px solid #36f"
                    : "1px solid #fe415c",
              }}
            />
            {value !== "" && !isValuable && (
              <Warn>올바른 이메일 형식을 입력해주세요.</Warn>
            )}
            <SubmitInput>
              <i className="far fa-envelope" />
              이메일로 시작하기
            </SubmitInput>
          </LoginForm>
          <Info>
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
            <br />
            회원가입 시 <span>개인정보 처리방침</span>과 <span>이용약관</span>을
            확인하였으며, 동의합니다.
          </Info>
        </LoginSide>
      </LoginModalWrap>
      <LoginModalBg onClick={loginModalOff} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginModalOff: () => dispatch(loginModalOff()),
    registerModalOn: () => dispatch(registerModalOn()),
  };
};

export default connect(null, mapDispatchToProps)(LoginModal);

const LoginModalWrap = styled.div`
  width: 400px;
  overflow-y: auto;
  top: 50%;
  left: 50%;
  max-width: 500px;
  max-height: calc(100vh - 150px);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  z-index: 300;
  line-height: 1.42857143;
`;

const Title = styled.div`
  height: 54px;
  padding: 16px 20px;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 21px;
  font-weight: 800;
  i {
    font-size: 18px;
    padding: 18px;
    position: absolute;
    top: 0;
    right: 0;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const LoginModalBg = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const LoginSide = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    margin-top: 24px;
    line-height: 1.54;
    font-size: 26px;
    font-weight: 600;
    color: #333;
  }
  h2 {
    margin-bottom: 40px;
    margin-top: 16px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    color: #666;
  }
`;

const LoginForm = styled.form`
  text-align: left;
  label {
    display: block;
    color: #767676;
    font-size: 14px;
  }

  input {
    width: 360px;
    height: 50px;
    padding: 0 15px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin: 11px 0 11px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const SubmitInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border: 0;
  border-radius: 5px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin-top: 22px;

  i {
    font-size: 18px;
    margin: -3px 0.7em 0 0;
  }
`;

const Info = styled.div`
  margin-top: 26px;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: #999;
  span {
    color: #36f;
    cursor: pointer;
  }
`;

const Warn = styled.div`
  padding: 0px 15px;
  font-size: 12px;
  color: #fe415c;
`;
