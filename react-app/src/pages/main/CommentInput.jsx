import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

/**
 * @return 댓글 작성 input창 컴포넌트
 */

export default function CommetnInput() {
  return (
    <>
      <CommentField>
        <InputCommentBox placeholder="댓글 작성하기" />
        <InputArrowTag>
          <Arrow />
        </InputArrowTag>
      </CommentField>
    </>
  );
}

const CommentField = styled.div`
  position: relative;
`;

const InputCommentBox = styled.input`
  background: #e2e2e2;
  border: none;
  width: 500px;
  height: 20px;
  margin: 3px 0px 10px 0px;
  padding: 2px 30px;
`;

const InputArrowTag = styled.div`
  position: absolute;
  top: 2px;
  left: 10px;
`;
