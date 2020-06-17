import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import styled from "styled-components";
import axios from "axios";
import { REGISTER } from "../../config";
import { registerModalOff, loginModalOn } from "../../actions";

const RegisterModal = ({ registerModalOff, loginModalOn, email }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptMerketing, setAcceptMerketing] = useState(false);
  const [nameCheckFail, setnameCheckFail] = useState(false);
  const [passwordCheckFail, setPasswordCheckFail] = useState(false);
  const [checkPwdCheckFail, setCheckPwdCheckFail] = useState(false);

  const checkAllAccept = () => {
    if (acceptPrivacy && acceptMerketing) {
      setAcceptPrivacy(false);
      setAcceptMerketing(false);
    } else {
      setAcceptPrivacy(true);
      setAcceptMerketing(true);
    }
  };

  const inputName = (e) => {
    setName(e.target.value);
  };

  const passwordRegCheck = (currentVal) => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return regExp.test(currentVal);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const inputPasswordCheck = (e) => {
    setCheckPwd(e.target.value);
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    if (!acceptPrivacy) {
      return;
    } else if (name === "") {
      setnameCheckFail(true);
      return;
    } else if (!passwordRegCheck(password)) {
      setPasswordCheckFail(true);
      return;
    } else if (password !== checkPwd) {
      setCheckPwdCheckFail(true);
    } else {
      try {
        await axios.post(REGISTER, {
          email,
          name,
          password,
          agreement: acceptMerketing ? 1 : 0,
        });
        loginModalOn();
        registerModalOff();
      } catch (err) {
        return;
      }
    }
  };
  useEffect((password) => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <RegisterModalWrap>
        <Title>
          회원가입
          <i className="xi-close" onClick={registerModalOff} />
        </Title>
        <RegisterFrom onSubmit={submitRegister}>
          <InputWrap>
            <label>이름</label>
            <input
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={inputName}
              onFocus={() => setnameCheckFail(false)}
              style={{ border: nameCheckFail && "1px solid #fe415c" }}
            />
            {nameCheckFail && <Warn>이름은 필수정보 입니다.</Warn>}
          </InputWrap>
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
          <InputWrap>
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="다시 한번 입력해 주세요."
              value={checkPwd}
              onChange={inputPasswordCheck}
              onFocus={() => setCheckPwdCheckFail(false)}
              style={{ border: checkPwdCheckFail && "1px solid #fe415c" }}
            />
            {checkPwdCheckFail && <Warn>비밀번호가 일치하지 않습니다.</Warn>}
          </InputWrap>
          <CheckWrap>
            <CheckContent>
              <i
                className={
                  acceptPrivacy && acceptMerketing
                    ? "xi-check-square"
                    : "xi-checkbox-blank"
                }
                onClick={checkAllAccept}
              />
              <h4>전체 동의</h4>
            </CheckContent>
          </CheckWrap>
          <Line />
          <CheckWrap>
            <CheckContent>
              <i
                className={
                  acceptPrivacy ? "xi-check-square" : "xi-checkbox-blank"
                }
                onClick={() => setAcceptPrivacy(!acceptPrivacy)}
              />
              <span>개인정보 수집 및 이용 동의 (필수)</span>
            </CheckContent>
            <CheckMore>자세히</CheckMore>
          </CheckWrap>
          <CheckWrap>
            <CheckContent>
              <i
                className={
                  acceptMerketing ? "xi-check-square" : "xi-checkbox-blank"
                }
                onClick={() => setAcceptMerketing(!acceptMerketing)}
              />
              <span>마케팅 정보 수신 동의 (선택)</span>
            </CheckContent>
            <CheckMore>자세히</CheckMore>
          </CheckWrap>
          <SubmitInput isActive={acceptPrivacy}>회원가입하기</SubmitInput>
        </RegisterFrom>
      </RegisterModalWrap>
      <RegisterBg onClick={registerModalOff} />
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
    registerModalOff: () => dispatch(registerModalOff()),
    loginModalOn: () => dispatch(loginModalOn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);

const RegisterModalWrap = styled.div`
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

const RegisterBg = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const RegisterFrom = styled.form`
  padding: 20px;
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
  margin-top: 11px;

  i {
    font-size: 18px;
    margin: -3px 0.7em 0 0;
  }
`;

const CheckWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 5px 0;
`;

const CheckContent = styled.div`
  display: felx;
  align-items: center;
  color: #939393;

  i {
    display: block;
    color: #ececec;
    font-size: 21px;
    margin-right: 10px;
    cursor: pointer;
  }
  .xi-check-square {
    color: #36f;
  }

  span {
    display: block;
  }

  h4 {
    font-size: 15px;
    color: #333333;
  }
`;

const CheckMore = styled.div`
  font-size: 13px;
  color: #767676;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ececec;
  margin: 5px 0;
`;

const Warn = styled.div`
  padding: 5px 15px;
  font-size: 12px;
  color: #fe415c;
`;
