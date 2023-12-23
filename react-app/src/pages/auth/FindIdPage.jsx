import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/common/AuthButton";
import AuthTitle from "../../components/common/AuthTitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * @return 아이디 찾기
 */

export default function FindId() {
  const [email, setEmail] = useState("");
  const [verificationCode, setverificationCode] = useState("");
  const navigate = useNavigate();

  const handleSendVerificationCode = async () => {
    try {
      const response = await axios.post(
        `https://192.168.1.127:8080/users/certified`,
        { email }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const gotoSignupPage = () => {
    navigate("/SignUp");
  };

  const gotoFindPwPage = () => {
    navigate("/FindPw");
  };

  return (
    <>
      <Container>
        <AuthTitle title="아이디 찾기" />
        <InputBox>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PositionBtn type="button" onClick={handleSendVerificationCode}>
            인증번호 발송
          </PositionBtn>
          <Input
            type="text"
            placeholder="인증번호를 입력하세요"
            value={verificationCode}
            onChange={(e) => setverificationCode(e.target.value)}
          />
          <AuthButton
            text="로그인 하러가기"
            onClick={() => navigate("/LoginPage")}
          />
        </InputBox>
        <Member>
          <MemberP>아직 회원이 아니신가요?</MemberP>
          <MemberB onClick={gotoSignupPage}>회원가입하기</MemberB>
        </Member>
        <Signup>
          <SignupP>비빌번호를 잊으셨나요?</SignupP>
          <SignupB onClick={gotoFindPwPage}>비밀번호 찾기</SignupB>
        </Signup>
      </Container>
    </>
  );
}

const Container = styled.div`
  align-items: center;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 25px;
  padding-left: 20px;
  display: inline-block;
  width: 530px;
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
const PositionBtn = styled.button`
  position: absolute;
  color: #0e1385;
  background-color: transparent;
  margin-left: 400px;
  top: 10px;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: #0b0f66;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MemberP = styled.p`
  margin: 20px 10px 20px 0px;
  color: #818181;
  font-size: 16px;
  font-weight: 500;
`;

const MemberB = styled.b`
  display: flex;
  align-items: center;
  color: #474747;
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
  line-height: normal;
  margin: -20px 0px 0px 0px;
`;

const SignupP = styled.p`
  margin-right: 10px;
  color: #818181;
  font-size: 16px;
  font-weight: 500;
`;

const SignupB = styled.b`
  display: flex;
  align-items: center;
  color: #474747;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`;
