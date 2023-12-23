import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * @return 회원탈퇴
 */

export default function UserLeave() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleUserDelete = async (e) => {
    e.preventDefault();
    if (inputText.toString() !== "Dev Is Community") {
      return alert("문장이 올바르지 않습니다");
    } else {
      try {
        const user_id = localStorage.getItem("user_id");
        await axios.delete(`http://43.202.62.70:8080/users/${user_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        localStorage.clear();
        navigate("/");
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Container>
        <Box>
          <Title>회원탈퇴</Title>
          <SmallText>
            회원탈퇴시 개인정보 및 DISCO에서 만들어진 모든 데이터는 삭제됩니다.
          </SmallText>
          <SmallText>
            모든 정보가 영구적으로 삭제되며, 다시는 복구할 수 없습니다.
          </SmallText>
          <BoldText>다음 문장을 입력하십시오 : Dev Is Community</BoldText>
          <Input
            type="text"
            placeholder="문장을 입력하세요"
            value={inputText}
            onChange={handleInputChange}
          />
          <Button onClick={handleUserDelete}>회원탈퇴</Button>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 30%;
`;

const Title = styled.div`
  color: #263f70;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 30px;
`;

const SmallText = styled.div`
  color: #aeaeae;
  font-size: 12px;
  text-align: center;
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin: 20px 0px 30px;
`;

const Input = styled.input`
  background-color: #f2f5fa;
  color: #818181;
  border: none;
  border-radius: 10px;
  width: 96%;
  height: 5vh;
  padding: 0 0 0 15px;
`;

const Button = styled.button`
  background-color: #4e71b5;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 5vh;
  margin: 20px 0;
`;
