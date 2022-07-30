import React from "react";
import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background: #711a75;
  color: #fff;

  & .header-container {
    padding: 0 36px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3 {
    font-family: "Permanent Marker", cursive;
    line-height: 60px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  span {
    color: #f7e5e0;
  }

  strong {
    color: #fff;
  }

  & .header-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & svg {
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

const Nav = () => {
  return (
    <HeaderStyle>
      <div className="header-container">
        <section className="header-left">
          <h3>
            <AnchorLink href="#pageTop">TWOOT</AnchorLink>
          </h3>
        </section>
        <section className="header-right">
          <span>
            <strong>Write</strong> a new tweet
          </span>
          <AnchorLink href="#newTwootForm">
            <FaAngleDoubleDown />
          </AnchorLink>
        </section>
      </div>
    </HeaderStyle>
  );
};

export default Nav;
