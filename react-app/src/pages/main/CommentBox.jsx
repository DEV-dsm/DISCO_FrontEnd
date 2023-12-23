import React from "react";
import styled from "styled-components";
import CommentBoxTag from "./CommentBoxTag";

/**
 * @return 답글 및 대댓글 컴포넌트
 */

export default function CommentBox() {
  return (
    <>
      <CommentUpload>
        <PostedComment>
          <CommentText>댓글입니다 댓글입니다 이것은 댓글</CommentText>
          <CommentBoxTag />
          <Reply>
            <CommentText>
              대댓글 답글입니다 이것은,, 대댓글 답글답글 대댓글 답글입니다
              이것은,, 대댓글 답글답글대댓글 답글입니다 이것은,, 대댓글 답글답글
            </CommentText>
          </Reply>
        </PostedComment>
      </CommentUpload>
    </>
  );
}

const CommentUpload = styled.div`
  position: relative;
  max-height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-track {
    background-color: #c3c3c3;
  }
`;

const PostedComment = styled.div`
  background: #e2e2e2;
  border: none;
  width: 480px;
  height: auto;
  padding: 2px 30px;
  margin: 5px 0px 0px 0px;
  position: relative;
`;

const CommentText = styled.p`
  color: #2e3749;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 2px 0px;
`;

const Reply = styled.div`
  margin: 0px 0px 0px 15px;
`;
