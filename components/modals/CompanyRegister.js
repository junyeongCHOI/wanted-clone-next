import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { companyRegisterModalOff } from "../../actions";
import axios from "axios";
import { ADMINREGISTER } from "../../config";

const CompanyRegister = ({ companyRegisterModalOff }) => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [contact, setContact] = useState("");

  const passwordRegCheck = (currentVal) => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return regExp.test(currentVal);
  };

  const checkContact = (e) => {
    setContact(e.target.value.replace(/[^0-9]/g, ""));
  };

  const checkEmail = (currentVal) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(currentVal);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    if (
      checkEmail(value) &&
      passwordRegCheck(password) &&
      name !== "" &&
      job !== "" &&
      contact !== ""
    ) {
      try {
        const res = await axios.post(ADMINREGISTER, {
          email: value,
          job_position: job,
          contact: contact,
          name: name,
          password: password,
        });
        location.href = "/dashboard";
        companyRegisterModalOff();
      } catch (err) {
        console.error(err);
        alert("이미 가입된 이메일 입니다.");
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <CompanyRegisterWrap>
        <Title>
          관리자 계정 만들기
          <i className="xi-close" onClick={companyRegisterModalOff} />
        </Title>
        <LoginSide onSubmit={submitEmail}>
          <LoginForm>
            <input
              autoFocus
              type="text"
              placeholder="담당자 성함"
              style={{
                border: "1px solid #e1e2e3",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="직책(or팀)"
              style={{
                border: "1px solid #e1e2e3",
              }}
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              type="text"
              placeholder="연락처"
              style={{
                border: "1px solid #e1e2e3",
              }}
              value={contact}
              onChange={checkContact}
            />
            <label>이메일</label>
            <input
              type="email"
              autoComplete="user-name"
              placeholder="회사 이메일 (로그인 아이디로 사용됩니다.)"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                border:
                  value === ""
                    ? "1px solid #e1e2e3"
                    : checkEmail(value)
                    ? "1px solid #36f"
                    : "1px solid #fe415c",
              }}
            />
            {value !== "" && !checkEmail(value) && (
              <Warn>올바른 이메일 형식을 입력해주세요.</Warn>
            )}
            <input
              type="password"
              autoComplete="current-password"
              placeholder="비밀번호 (숫자, 영문, 특수문자 포함 6자리 이상)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border:
                  password === ""
                    ? "1px solid #e1e2e3"
                    : passwordRegCheck(password)
                    ? "1px solid #36f"
                    : "1px solid #fe415c",
              }}
            />
            {password !== "" && !passwordRegCheck(password) && (
              <Warn>올바른 비밀번호 형식을 입력해주세요.</Warn>
            )}
            <SubmitInput>관리자 계정 생성</SubmitInput>
          </LoginForm>
          <Info>이미 가입되어있으신가요?</Info>
        </LoginSide>
      </CompanyRegisterWrap>
      <LoginModalBg onClick={companyRegisterModalOff} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    companyRegisterModalOff: () => dispatch(companyRegisterModalOff()),
  };
};

export default connect(null, mapDispatchToProps)(CompanyRegister);

const CompanyRegisterWrap = styled.div`
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
  z-index: 3000;
  line-height: 1.42857143;
`;

const Title = styled.div`
  height: 54px;
  padding: 16px 20px;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 18px;
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

const LoginModalBg = styled.div`
  position: fixed;
  z-index: 2000;
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
  outline: none !important;

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
