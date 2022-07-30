import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import NewTwootForm from "./NewTwootForm";
import TwootsList from "./TwootsList";
import styled from "styled-components";

const MainWrapper = styled.div`
  /* margin: 0 36px; */
`;

const Main = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <>
      <MainWrapper className="">
        <Nav />
        <Hero />
        <NewTwootForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        <TwootsList isUpdate={isUpdate} />
      </MainWrapper>
    </>
  );
};

export default Main;
