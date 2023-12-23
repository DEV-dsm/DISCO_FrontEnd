import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Pen } from "../../assets/Pen.svg";
import { ReactComponent as Book } from "../../assets/Book.svg";
import Top from "../../components/common/Top";
import WriteModal from "../../components/main/WriteModal";
import UpdateModal from "../../components/main/UpdateModal";

/**
 * @return 다이어리
 */

export default function DiaryPage() {
  const navigate = useNavigate();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [writeModalOpen, setWrtieModalOpen] = useState(false);

  const updateShowModal = () => {
    setUpdateModalOpen(true);
  };

  const writeShowModal = () => {
    setWrtieModalOpen(true);
  };

  //게시물 삭제
  const handleDiaryDelete = async (postId) => {
    try {
      await axios.delete(`http://43.202.62.70:8080/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      alert("게시물이 삭제되었습니다");
      navigate("/DiaryPage");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");

  //게시물 목록 조회
  useEffect(() => {
    const fetchPosts = async (keyword) => {
      try {
        const response = await axios.get(
          `http://43.202.62.70:8080/post/search?keyword=${keyword}`,
          {
            params: {
              keyword: keyword,
            },
          }
        );
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [keyword]);

  //게시물 조회
  const handleGotoDiaryDetails = async (postId) => {
    try {
      await axios.get(`http://43.202.62.70:8080/post/${postId}`, {
        params: {
          postId: postId,
        },
      });
      navigate(`/detail/${postId}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Top myBtnText={"mypage"} SearchBox={(onchange = { setKeyword })} />
        <DetailedFunction>
          <History>History</History>
          <Write>
            <Pen />
            <WriteText onClick={writeShowModal}>글 작성</WriteText>
            {writeModalOpen && (
              <WriteModal setWriteModalOpen={setWrtieModalOpen} />
            )}
          </Write>
          <Diary>
            <Book />
            <DiaryText>다이어리</DiaryText>
          </Diary>
        </DetailedFunction>
        <Horizen></Horizen>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostText onClick={handleGotoDiaryDetails}>{post.title}</PostText>
            <Buttons>
              <ButtonDelete onClick={handleDiaryDelete(post.id)}>
                삭제
              </ButtonDelete>
              <ButtonChange onClick={updateShowModal}>수정</ButtonChange>
            </Buttons>
            {updateModalOpen && (
              <UpdateModal setUpdateModalOpen={setUpdateModalOpen} />
            )}
          </Post>
        ))}
        {/*
        <Post>
          <PostText onClick={handleGotoDiaryDetails}>
            이것은 게시물 제목입니다. 이것은 게시물 제목이에요.
          </PostText>
          <Buttons>
            <ButtonDelete onClick={handleDiaryDelete}>삭제</ButtonDelete>
            <ButtonChange onClick={updateShowModal}>수정</ButtonChange>
          </Buttons>
          {updateModalOpen && (
            <UpdateModal setUpdateModalOpen={setUpdateModalOpen} />
          )}
        </Post>
          */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

const DetailedFunction = styled.div`
  display: flex;
`;

const History = styled.p`
  font-size: 22px;
  font-weight: 400;
`;

const Write = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 0px 620px;
  &:hover {
    cursor: pointer;
  }
`;

const WriteText = styled.p`
  margin-left: 7px;
`;

const Diary = styled.div`
  display: flex;
  align-items: center;
`;

const DiaryText = styled.p`
  margin-left: 6px;
`;

const Horizen = styled.div`
  width: 900px;
  height: 2px;
  border-top: 1px solid black;
  margin: -10px 0px 0px;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ededed;
  width: 900px;
  height: 50px;
  border-radius: 5px;
  margin-top: 13px;
`;

const PostText = styled.p`
  margin: 0px 30px;
  width: 500px;
`;

const Buttons = styled.div`
  margin: 0px 20px;
`;

const ButtonDelete = styled.button`
  font-size: 14px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonChange = styled.button`
  font-size: 14px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
