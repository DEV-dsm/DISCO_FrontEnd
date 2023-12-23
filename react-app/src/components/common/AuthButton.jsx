import React from "react";
import styled from "styled-components";

function AuthButton({ text, onClick }) {
  return <Btn onClick={onClick}>{text}</Btn>;
}

const Btn = styled.button`
  margin-top: 20px;
  width: 530px;
  height: 45px;
  border: 0;
  border-radius: 10px;
  font-size: 19px;
  font-weight: bold;
  color: white;
  background-color: #4e71b5;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #6684bf;
  }
`;
export default AuthButton;
