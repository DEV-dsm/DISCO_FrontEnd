import React from "react";
import styled from "styled-components";

export default function MainLink() {
  return (
    <>
      <Container>
        <LinkText>이전글 > 이전글이 없습니다</LinkText>
        <LinkText>다음글 > 다음글이 없습니다</LinkText>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;
const LinkText = styled.p`
  color: #242424;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px;
`;
