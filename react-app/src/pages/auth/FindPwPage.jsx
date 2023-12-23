import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/common/AuthButton";
import AuthTitle from "../../components/common/AuthTitle";

/**
 * @return 비밀번호 찾기
 */

export default function FindPw() {
  const navigate = useNavigate();

  const gotoSignupPage = () => {
    navigate("/SignUp");
  };

  const gotoFindIdPage = () => {
    navigate("/FindId");
  };

  return (
    <>
      <Container>
        <AuthTitle title="비밀번호 찾기" />
        <InputBox>
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="이메일을 입력하세요" />
          <PositionBtn>인증번호 발송</PositionBtn>
          <Input type="text" placeholder="인증번호를 입력하세요" />
          <AuthButton text="로그인 하러가기" />
        </InputBox>
        <Member>
          <MemberP>아직 회원이 아니신가요?</MemberP>
          <MemberB onClick={gotoSignupPage}>회원가입하기</MemberB>
        </Member>
        <Signup>
          <SignupP>아이디를 잊으셨나요?</SignupP>
          <SignupB onClick={gotoFindIdPage}>아이디 찾기</SignupB>
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
  margin-left: 400px;
  top: 85px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: #0e1385;
  outline: none;
  border: 0;
  &:hover {
    cursor: pointer;
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
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`;
