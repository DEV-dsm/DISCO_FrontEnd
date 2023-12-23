import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/common/AuthButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const BASE_URL = "192.168.1.127:8080";

/**
 * @return 로그인
 */

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputData;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const LoginClick = async () => {
    try {
      const response = await axios.post(
        `http://192.168.1.127:8080/users/login`,
        {
          email,
          password,
        }
      );
      navigate("/main");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const gotoSignupPage = () => {
    navigate("/SignUp");
  };

  const gotoFindIdPage = () => {
    navigate("/FindId");
  };

  const gotoFindPwPage = () => {
    navigate("/FindPw");
  };

  return (
    <>
      <Container>
        <Title>Login</Title>
        <InputBox>
          <Input
            name="email"
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={(e) => inputChange(e)}
            value={email}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => inputChange(e)}
            value={password}
          />
          <AuthButton text="Login" onClick={LoginClick} />
        </InputBox>
        <Member>
          <MemberP>아직 회원이 아니신가요?</MemberP>
          <MemberB onClick={gotoSignupPage}>회원가입하기</MemberB>
        </Member>
        <Signup>
          <SignupP>아이디, 비빌번호를 잊으셨나요?</SignupP>
          <SignupB onClick={gotoFindIdPage}>아이디 찾기 /</SignupB>
          <SignupB onClick={gotoFindPwPage}>비밀번호 찾기</SignupB>
        </Signup>
      </Container>
    </>
  );
};

const Container = styled.div`
  align-items: center;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  font-size: 40px;
  font-style: italic;
  font-weight: 900;
  color: #263f70;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 25px;
  padding-left: 20px;
  display: inline-block;
  width: 27%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #818181;
  background-color: #f2f5fa;
  border: 0;
  border-radius: 10px;
  &:focus {
    outline-style: none;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 0px;
`;

const MemberP = styled.p`
  margin-right: 10px;
  color: #818181;
  font-size: 14px;
  font-weight: 500;
`;

const MemberB = styled.b`
  display: flex;
  align-items: center;
  color: #474747;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`;

const Signup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: -20px 0px;
`;

const SignupP = styled.p`
  margin-right: 10px;
  color: #818181;
  font-size: 14px;
  font-weight: 500;
`;

const SignupB = styled.b`
  display: flex;
  align-items: center;
  color: #474747;
  font-size: 14px;
  font-weight: 600;
  margin: 0px 5px 0px 0px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`;

export default LoginPage;
