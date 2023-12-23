import React from "react";
import styled from "styled-components";

/**
 * @return 에러페이지
 */

export default function Error() {
  return (
    <>
      <Container>
        <Box>
          <Text>
            <Title>404</Title>
            <NotFound>Page Not Found </NotFound>
            <Message>죄송합니다. 요청하신 페이지를 찾을 수가 없습니다.</Message>
          </Text>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 2px solid #6986a9;
  width: 30%;
  height: 27%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0px;
  margin: 3%;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 70px;
`;
const NotFound = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
const Message = styled.p`
  font-size: 12px;
  margin: 10px;
`;
