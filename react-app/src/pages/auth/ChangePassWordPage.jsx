import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AuthTitle from "../../components/common/AuthTitle";
import AuthButton from "../../components/common/AuthButton";
import { useNavigate } from "react-router-dom";
/**
 * @return 비밀번호 변경
 */

export default function ChangePassWord() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    currentPassword: "",
    newPassword: "",
    PasswordCheck: "",
  });

  const { currentPassword, newPassword, PasswordCheck } = inputData;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const ChangePw = async () => {
    try {
      const response = await axios.patch(
        `http://43.202.62.70:8080/users/password`,
        {
          currentPassword,
          newPassword,
          PasswordCheck,
        }
      );
      navigate("/main");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <AuthTitle title="비밀번호 변경" />
        <InputBox>
          <Input
            name="currentPassword"
            type="text"
            placeholder="기존 비밀번호를 입력하세요"
            onChange={(e) => inputChange(e)}
            value={currentPassword}
          />
          <Input
            name="newPassword"
            type="password"
            placeholder="새 비밀번호를 입력하세요"
            onChange={(e) => inputChange(e)}
            value={newPassword}
          />
          <Input
            name="passwordCheck"
            type="password"
            placeholder="새 비밀번호를 확인해주세요"
            onChange={(e) => inputChange(e)}
            value={PasswordCheck}
          />
          <AuthButton text="확인" onClick={ChangePw} />
        </InputBox>
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
