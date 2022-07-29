import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import NewTwootForm from "./NewTwootForm";
import TwootsList from "./TwootsList";
import styled from "styled-components";

const MainWrapper = styled.div`
  /* margin: 0 36px; */
`;

const Main = () => {
  return (
    <MainWrapper className="">
      <Nav />
      <Hero />
      <NewTwootForm />
      <TwootsList />
    </MainWrapper>
  );
};

export default Main;
