import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import NewTwootForm from "./NewTwootForm";
import TwootsList from "./TwootsList";
import styled from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MainWrapper = styled.div`
  & .backToTop {
    position: fixed;
    bottom: 3%;
    right: 2.3%;

    & svg {
      font-size: 24px;
      color: black;
    }
  }
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
        <AnchorLink href="#pageTop" className="backToTop">
          <FaAngleDoubleUp />
        </AnchorLink>
      </MainWrapper>
    </>
  );
};

export default Main;
