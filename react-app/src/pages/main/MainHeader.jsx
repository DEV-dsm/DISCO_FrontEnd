import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Pen } from "../../assets/Pen.svg";
import { ReactComponent as Book } from "../../assets/Book.svg";
import WriteModal from "../../components/main/WriteModal";

/**
 * @return 게시물 헤더 컴포넌트
 */

export default function MainHeader() {
  const navigate = useNavigate();
  const [writeModalOpen, setWrtieModalOpen] = useState(false);

  const writeShowModal = () => {
    setWrtieModalOpen(true);
  };

  const goToDiaryPage = (e) => {
    navigate("/DiaryPage");
  };

  return (
    <>
      <Header>
        <Title>Story room</Title>
        <Tag>
          <TagBox>
            <Pen />
            <TagText onClick={writeShowModal}>글 작성</TagText>
            {writeModalOpen && (
              <WriteModal setWriteModalOpen={setWrtieModalOpen} />
            )}
          </TagBox>
          <TagBox>
            <Book />
            <TagText onClick={goToDiaryPage}>다이어리</TagText>
          </TagBox>
        </Tag>
      </Header>
      <Line />
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 22px;
  height: 15px;
`;

const Tag = styled.div`
  display: flex;
  height: 80px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 10px;
  color: ${(props) => (props.active ? "#4e71b5" : "#3a3a3a")};
`;

const TagText = styled.p`
  color: #3a3a3a;
  font-size: 14px;
  font-weight: 700;
  margin: 0px 5px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #9b9ea5;
  margin: -20px 0 0 0;
`;
