import React from "react";
import styled from "styled-components";

export default function CommentUpdateDelete({ setCommentStateOpen }) {
  const closeCommentState = () => {
    setCommentStateOpen(false);
  };
  /*
  const handleUpdate = async (postId) => {
    const updatedComment = "수정된 댓글 내용";
    await updatedComment(commentId, updatedComment);
    setCommentStateOpen(updatedComment);
    closeCommentState();
  };

  const handleDelete = async () => {
    await delteComment(commentId);
    setCommentStateOpen(null);
    closeCommentState();
  };
*/
  return (
    <>
      <Container>
        <Box>
          <Text oonClick={closeCommentState}>삭제하기</Text>
          <Line />
          <Text onClick={closeCommentState}>수정하기</Text>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #ebebeb;
  border: 1px solid #adadad;
  width: 90px;
  height: 60px;
  z-index: 100px;
  top: 5px;
  right: 20px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: #4e71b5;
  font-size: 12px;
  margin: 7px;
  font-weight: 400;
`;

const Line = styled.div`
  background: #adadad;
  width: 75px;
  height: 1px;
`;
