import React, { useState } from "react";
import styled from "styled-components";
import AuthTitle from "../../components/common/AuthTitle";
import AuthButton from "../../components/common/AuthButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * @return 회원가입
 */

export default function SignUp() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { username, email, password, passwordCheck } = inputData;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const SignupClick = async () => {
    try {
      const fullEmail = email + selectValue;
      const response = await axios.post(
        `http://43.202.62.70:8080/users/signup`,
        {
          username,
          email: fullEmail,
          password,
          passwordCheck,
        }
      );
      navigate("/Login");
      return response;
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const [selectValue, setSelectValue] = useState("");

  const selectValueChange = (e) => {
    setSelectValue(e.target.value);
  };

  const emailAuthentication = async () => {
    const newEmail = email + selectValue;
    try {
      await axios.post(
        `http://43.202.62.70:8080/users/certified`,
        { email: newEmail },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <AuthTitle title="회원가입" />
        <InputBox>
          <Input
            name="username"
            type="text"
            placeholder="이름을 입력하세요"
            onChange={(e) => inputChange(e)}
            value={username}
          />
          <Email>
            <EmailInput
              name="email"
              type="email"
              placeholder="이메일을 입력하세요"
              onChange={(e) => {
                inputChange(e);
              }}
              value={email}
            />
            <Selection
              onChange={(e) => {
                selectValueChange(e);
              }}
            >
              <Option value={"gmail"}>@gmail.com</Option>
              <Option value={"naver"}>@naver.com</Option>
              <Option value={"daum"}>@daum.com</Option>
            </Selection>
          </Email>

          <SentEmail onClick={emailAuthentication}>
            다음 이메일로 인증번호 발송하기
          </SentEmail>

          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => inputChange(e)}
            value={password}
          />
          <Input
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 재입력하세요"
            onChange={(e) => inputChange(e)}
            value={passwordCheck}
          />
          <Input type="text" placeholder="인증번호를 입력하세요" />
          <AuthButton text="가입하기" onClick={SignupClick} />
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
  height: 40px;
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

const Email = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EmailInput = styled.input`
  margin-bottom: 45px;
  padding-left: 20px;
  display: inline-block;
  width: 290px;
  height: 40px;
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

const Selection = styled.select`
  margin-bottom: 25px;
  padding: 0px 10px;
  display: inline-block;
  margin: 0px 0px 0px 10px;
  width: 210px;
  height: 40px;
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

const Option = styled.option``;

const SentEmail = styled.p`
  color: #4e71b5;
  position: absolute;
  top: 105px;
  left: 680px;
  margin: 10px;
`;
