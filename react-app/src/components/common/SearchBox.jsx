import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/Search.svg";
import { useState } from "react";

const GrayBackground = styled.div`
  display: flex;
  width: 727px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ededed;
  flex-direction: row;
  align-items: center;
  padding-left: 2%;
`;
const Input = styled.input`
  margin: 0 1%;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: larger;
  }
`;

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      //onSearch(searchValue);
    }
  };

  return (
    <GrayBackground>
      <Search />
      <Input
        type={"search"}
        placeholder={"Search"}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
    </GrayBackground>
  );
}
