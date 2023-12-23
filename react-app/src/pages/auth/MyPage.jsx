import React from "react";
import styled from "styled-components";
import axios from "axios";
import Top from "../../components/common/Top";
import { ReactComponent as Profile } from "../../assets/Profile.svg";
import { ReactComponent as ShareMark } from "../../assets/ShareMark.svg";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      await axios.delete(`http://43.202.62.70:8080/users/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      localStorage.clear();
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const goToChangePassWord = (e) => {
    navigate("/ChangePW");
  };
  const goToUserLeave = (e) => {
    navigate("/UserLeave");
  };

  return (
    <>
      <Container>
        <Top myBtnText={"main page"} />
        <MypageContent>
          <Background>
            <User>
              <Box>
                <Profile />
                <TextBox>
                  <BoldText>limda00</BoldText>
                  <BlueText>dylim7715@gmail.com</BlueText>
                </TextBox>
              </Box>
              <Box>
                <ShareMark />
                <TextBox>
                  <P>limda00님의 DISCO 페이지를 공유해보세요!</P>
                  <BoldText>
                    https: //www.DISCO.디스코 웹페이지 공유링크인 것
                  </BoldText>
                </TextBox>
              </Box>
            </User>
          </Background>
          <Background>
            <BoldText onClick={handleLogout}>로그아웃</BoldText>
          </Background>
          <Background>
            <BoldText onClick={goToChangePassWord}>비밀번호 변경</BoldText>
          </Background>
          <Background>
            <BoldText onClick={goToUserLeave}>회원탈퇴</BoldText>
          </Background>
        </MypageContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MypageContent = styled.div`
  margin: 30px;
`;

const Background = styled.div`
  background-color: #ededed;
  width: 870px;
  margin: 20px;
  padding: 15px 20px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Box = styled.div`
  display: flex;
  margin: 10px 0px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;

const BoldText = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 15px;
`;

const BlueText = styled.p`
  margin: 7px 0px;
  font-size: 15px;
  color: #192b54;
`;

const P = styled.p`
  margin: 7px 0px;
`;
