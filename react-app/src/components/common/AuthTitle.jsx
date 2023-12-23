import React from "react";
import styled from "styled-components";

function AuthTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  font-size: 27px;
  font-weight: 900;
  color: #263f70;
`;

export default AuthTitle;
