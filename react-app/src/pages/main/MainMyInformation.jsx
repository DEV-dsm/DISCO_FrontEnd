import React from "react";
import styled from "styled-components";
import { ReactComponent as Write } from "../../assets/Write.svg";

/**
 * @return 나의 정보 및 소개글 컴포넌트 (우측 게시물)
 */

export default function MainMyInformation() {
  return (
    <>
      <MyInformationBackGround>
        <UserInfo>
          <UserId>limda00</UserId>
          <Email>dylim7715@gmail.com</Email>
        </UserInfo>
        <Introduction>
          <Write />
          <MyIntroduction>
            이곳은 소개글 적는 공간 적었을 때 이런 느낌 안녕하세요 임다영 입니다
            하하
          </MyIntroduction>
        </Introduction>
      </MyInformationBackGround>
    </>
  );
}

const MyInformationBackGround = styled.div`
  width: 239px;
  height: 600px;
  border-radius: 5px;
  background: #ededed;
`;

const UserInfo = styled.div`
  margin: 42px 20px 60px 30px;
  width: 100px;
`;

const UserId = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  height: 10px;
`;

const Email = styled.p``;

const Introduction = styled.div`
  margin: 0px 20px 0px 30px;
`;

const MyIntroduction = styled.p`
  font-size: 14px;
  line-height: 25px;
  margin: 8px 0px;
`;
