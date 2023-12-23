import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { ReactComponent as Setting } from "../../assets/Setting.svg";
import CommentUpdateDelete from "../../components/main/CommentUpdateDelete";

export default function CommentBoxTag() {
  const [commentStateOpen, setCommentStateOpen] = useState(false);

  const showCommentState = () => {
    setCommentStateOpen(true);
  };
  /*
  const UpdateComment = async (id, updatedComment) => {
    try {
      const response = await axios.patch(``, updatedComment);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const response = await axios.delete(``);
    } catch (error) {
      console.log(error);
    }
  };
*/

  return (
    <>
      <ArrowTag>
        <Arrow />
      </ArrowTag>
      <SettingTag onClick={showCommentState}>
        <Setting />
      </SettingTag>
      {commentStateOpen && (
        <CommentUpdateDelete setCommentStateOpen={setCommentStateOpen} />
      )}
    </>
  );
}

const ArrowTag = styled.div`
  position: absolute;
  top: 2px;
  left: 10px;
`;

const SettingTag = styled.div`
  position: absolute;
  top: 3px;
  right: 8px;
`;
