import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

/**
 * @return 아이디 확인창
 */

export default function CheckID() {
  const navigate = useNavigate();

  const gotoFindPwPage = () => {
    navigate("/FindPw");
  };

  const gotoLoginPage = () => {
    navigate("/Login");
  };

  return (
    <>
      <Container>
        <Line />
        <Print>
          회원님의 아이디는 <Accent>dayoung</Accent> (으)로 등록되어있습니다.
        </Print>
        <Line />
        <SmallText>
          요청하신 계정의 아이디는 다음과 같습니다. 개인정보를 보호를 위해
          아이디 정보를 안전하게 보관하여 주세요.
        </SmallText>
        <ButtonContainer>
          <Button onClick={gotoFindPwPage}>비밀번호 찾기</Button>
          <Button onClick={gotoLoginPage}>로그인 하러가기</Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 800px;
  height: 2px;
  background: #bcc3d1;
`;

const Print = styled.p`
  margin: 70px;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`;

const Accent = styled.p`
  color: #0946d0;
  display: inline;
  font-weight: 600;
`;

const SmallText = styled.p`
  color: #aeaeae;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #4e71b5;
  color: white;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  margin: 20px 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;
