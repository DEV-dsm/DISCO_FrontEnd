import styled from "styled-components";

const MyPageBtn = ({ btnText }) => {
  const Btn = styled.button`
    width: 131px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 30px;
    border: none;
    background: #4e71b5;

    color: #fff;

    font-family: Inter, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  return <Btn>{btnText}</Btn>;
};

export default MyPageBtn;
