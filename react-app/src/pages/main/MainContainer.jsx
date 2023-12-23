import React from "react";
import styled from "styled-components";
import MainWritingBorder from "./MainWritingBorder";
import MainMyInformation from "./MainMyInformation";

/**
 * @return 메인 컨테이너
 */

export default function MainContainer() {
  return (
    <Container>
      <MainWritingBorder />
      <MainMyInformation />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
`;
