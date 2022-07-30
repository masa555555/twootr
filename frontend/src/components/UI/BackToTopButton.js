import React from "react";
import styled from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ButtonStyle = styled.div`
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

const BackToTopButton = () => {
  return (
    <ButtonStyle>
      <AnchorLink href="#pageTop" className="backToTop">
        <FaAngleDoubleUp />
      </AnchorLink>
    </ButtonStyle>
  );
};

export default BackToTopButton;
