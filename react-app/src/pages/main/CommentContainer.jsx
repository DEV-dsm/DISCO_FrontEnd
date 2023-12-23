import React from "react";
import styled from "styled-components";
import CommentHeader from "./CommentHeader";
import CommentBox from "./CommentBox";
import CommetnInput from "./CommentInput";

/**
 * @return 댓글 컨테이너
 */

export default function MainCommentContainer() {
  return (
    <>
      <UserComment>
        <CommentHeader />
        <CommetnInput />
        <CommentBox />
      </UserComment>
    </>
  );
}

const UserComment = styled.div`
  position: absolute;
  bottom: 45px;
  left: 30px;
  display: flex;
  flex-direction: column;
`;
