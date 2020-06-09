import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { passwordModalOff } from "../../actions";
import { LOGIN } from "../../config";

const PasswordModal = ({ email, passwordModalOff }) => {
  const [password, setPassword] = useState("");
  const [passwordCheckFail, setPasswordCheckFail] = useState(false);

  const submitPassword = async (e) => {
    e.preventDefault();
    if (passwordRegCheck(password)) {
      try {
        const res = await axios.post(LOGIN, {
          email,
          password,
        });
        localStorage.setItem("token", res.data.token);
        passwordModalOff();
        Router.push("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      setPasswordCheckFail(true);
    }
  };

  const passwordRegCheck = (currentVal) => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return regExp.test(currentVal);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <PasswordModalWrap>
        <Title>
          로그인
          <i className="xi-close" onClick={passwordModalOff} />
        </Title>
        <InputPasswordWrap>
          <InputWrap>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="6자 이상 입력해 주세요. (영어, 숫자, 특수문자 포함)"
              value={password}
              onChange={inputPassword}
              onFocus={() => setPasswordCheckFail(false)}
              style={{ border: passwordCheckFail && "1px solid #fe415c" }}
            />
            {passwordCheckFail && (
              <Warn>
                영문자, 숫자, 특수문자만 사용하여 6자 이상 입력해주세요.
              </Warn>
            )}
          </InputWrap>
          <SubmitInput isActive={true} onClick={submitPassword}>
            로그인하기
          </SubmitInput>
        </InputPasswordWrap>
      </PasswordModalWrap>
      <LoginModalBg onClick={passwordModalOff} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.loginEmail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    passwordModalOff: () => dispatch(passwordModalOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordModal);

const PasswordModalWrap = styled.div`
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

const InputPasswordWrap = styled.div`
  padding: 20px;
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

const Title = styled.div`
  height: 54px;
  padding: 19px 20px;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
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

const InputWrap = styled.div`
  font-size: 15px;
  color: #767676;
  margin: 11px 0 11px;
  input {
    width: 100%;
    height: 50px;
    padding: 0 15px;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    margin: 11px 0 0;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }

    &:focus {
      border: 1px solid #36f;
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
  background-color: ${({ isActive }) => (isActive ? "#36f" : "#f2f4f7")};
  font-size: 16px;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? "#fff" : "#cacaca")};
  cursor: pointer;
  margin-top: 20px;

  i {
    font-size: 18px;
    margin: -3px 0.7em 0 0;
  }
`;
