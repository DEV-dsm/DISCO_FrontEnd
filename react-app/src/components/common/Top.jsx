import styled from "styled-components";
import SearchBox from "./SearchBox";
import MyPageBtn from "./MyPageBtn";

const Top = ({ myBtnText }) => {
  return (
    <FlexDiv isColumn={true} alignDir={"flex-start"}>
      <BtnNInputs>
        <SearchBox />
        <MyPageBtn btnText={myBtnText} />
      </BtnNInputs>
      <Tip>Welcome to DISCO! You can post whatever you want here</Tip>
    </FlexDiv>
  );
};

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  align-items: ${({ alignDir }) => (alignDir ? alignDir : "center")};
`;

const BtnNInputs = styled(FlexDiv)`
  width: 910px;
  margin: 45px 0px 0px 0px;
  justify-content: space-between;
`;

const Tip = styled.p`
  color: #707070;
  margin: 10px 10px;
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Top;
