import React from "react";
import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/Like.svg";

/**
* @return 댓글 창 헤더 컴포넌트
*/

export default function CommentHeader() {
  return (
    <>
      <CommentHeaderContainer>
        <CommentTitle>what friends say</CommentTitle>
        <Tag>
          <Like />
          <LikeNumbers>좋아요 1315</LikeNumbers>
        </Tag>
      </CommentHeaderContainer>
      <Line />
    </>
  );
}

const CommentHeaderContainer = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
`;

const CommentTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  height: 10px;
`;

const Tag = styled.div`
  display: flex;
`;

const LikeNumbers = styled.p`
  color: #464646;
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px;
`;

const Line = styled.div`
  width: 560px;
  height: 1px;
  background: #000;
  margin: 10px 0px;
`;
