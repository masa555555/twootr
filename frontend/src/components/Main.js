import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import NewTwootForm from "./NewTwootForm";
import TwootsList from "./TwootsList";
import styled from "styled-components";
import BackToTopButton from "./UI/BackToTopButton";

const MainWrapper = styled.div`
  //
`;

const Main = () => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <>
      <MainWrapper id="pageTop">
        <Nav />
        <Hero />
        <NewTwootForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        <TwootsList isUpdate={isUpdate} />
        <BackToTopButton />
      </MainWrapper>
    </>
  );
};

export default Main;
