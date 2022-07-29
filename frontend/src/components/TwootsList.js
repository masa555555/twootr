import React from "react";
import styled from "styled-components";
import TwootCard from "./UI/TwootCard";

const TwootsListStyle = styled.ul`
  padding: 2rem 100px 0;
`;

const TwootsList = () => {
  return (
    <TwootsListStyle>
      <TwootCard />
    </TwootsListStyle>
  );
};

export default TwootsList;
