import React from "react";
import styled from "styled-components";
import CommentContainer from "./CommentContainer";
import MainElement from "./MainElememt";

/**
 * @return 업로드 된 게시물 컴포넌트 (좌측 게시물)
 */

export default function MainBorder() {
  return (
    <>
      <WritingBackGround>
        <WritingBorder>
          <WriteText>
            history 내 글만 보임 제가 적은 게시글이 보여집니다 이것은 게시물
            입니다 안녕하세요 아무말이나 적겠습니다 게시판 느낌? 아무말이나 적는
            공간 아무말아무말 여기 적을 말이 없다. 아무말 아무말 의미 없는 말,,
            생각없이 적는 타자 글 채우기 용 이것은 의미없는 글입니다. 게시판
            느낌? 아무말이나 적는 공간 아무말아무말 여기 적을 말이 없다. 아무말
            아무말 의미 없는 말 생각없이 적는 타자
          </WriteText>
          <CommentContainer />
        </WritingBorder>
        <MainElement />
      </WritingBackGround>
    </>
  );
}

const WritingBackGround = styled.div`
  width: 643px;
  height: 600px;
  border-radius: 5px;
  background: #ededed;
  position: relative;
`;

const WritingBorder = styled.div`
  width: 548px;
  margin: 90px 30px 0px;
`;

const WriteText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
`;
